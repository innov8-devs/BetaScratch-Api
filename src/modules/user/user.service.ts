import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as argon2 from 'argon2';
import { PrismaService } from '../prisma.service';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { MESSAGES } from '../../core/messages';
import { WalletService } from '../wallet/wallet.service';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import {
  RegisterInput,
  UserPaginationInput,
  ValidateFormOneInput,
  ValidateFormTwoInput,
} from './dto/user.request';
import { MailService } from 'modules/mail/mail.service';
import { MAIL_MESSAGE, MAIL_SUBJECT } from 'modules/mail/mail.constant';
import { AUTH_TYPE, CURRENCY, VERIFICATION } from 'types/constants/enum';
import { OtpService } from 'modules/otp/otp.service';

@Injectable()
export class UserService {
  constructor(
    private readonly mailService: MailService,
    private readonly walletService: WalletService,
    private readonly prismaService: PrismaService,
    private readonly otpService: OtpService,
  ) {}

  // Get current logged in user
  async me(user: User): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: { id: user.id },
      include: { wallet: true },
    });
  }

  // register
  async register(input: RegisterInput): Promise<User> {
    const errMessage = [];
    const emailUsed = await this.findUnique({
      email: input.email.toLowerCase(),
    });
    const usernameUsed = await this.findUnique({
      username: input.username.toLowerCase(),
    });
    const mobileNumberUsed = await this.findUnique({
      mobileNumber: input.mobileNumber,
    });
    if (emailUsed)
      errMessage.push({ name: 'email', message: MESSAGES.AUTH.EMAIL_CONFLICT });
    if (usernameUsed)
      errMessage.push({
        name: 'username',
        message: MESSAGES.AUTH.USERNAME_CONFLICT,
      });
    if (mobileNumberUsed)
      errMessage.push({
        name: 'mobileNumber',
        message: MESSAGES.AUTH.MOBILE_NUMBER_CONFLICT,
      });
    if (input.password.length <= 6)
      throw new BadRequestException({
        name: 'password',
        message: MESSAGES.AUTH.SHORT_PASSWORD,
      });
    const { invite, ...rest } = input;
    const hashedPassword = await argon2.hash(input.password);
    const user = await this.prismaService.user.create({
      data: {
        ...rest,
        email: input.email.toLowerCase(),
        username: input.username.toLowerCase(),
        password: hashedPassword,
        role: ROLE.USER,
      },
    });

    // TODO currency

    await this.walletService.createWallet({
      bonus: 0,
      user: { connect: { id: user.id } },
      withdrawable: 500,
      currency: CURRENCY.NGN,
    });

    if (invite) {
      const refferer = await this.findUnique({ username: invite });

      await this.prismaService.referral.upsert({
        where: { userId: refferer.id },
        update: {
          referrals: { push: user.id },
        },
        create: {
          user: { connect: { id: refferer.id } },
          referrals: [user.id],
        },
      });

      await this.mailService.sendMail({
        subject: MAIL_SUBJECT.REFERRAL,
        html: MAIL_MESSAGE.REFRERRAL(user.firstName),
        to: refferer.email,
      });
    }

    // const otp = await this.otpService.createAuthOtp(
    //   user,
    //   AUTH_TYPE.CONFIRM_USER_PREFIX,
    // );

    // await this.mailService.sendMail({
    //   subject: MAIL_SUBJECT.REGISTER,
    //   html: MAIL_MESSAGE.REGISTER(otp.code),
    //   to: user.email,
    // });

    await this.mailService.sendMail({
      subject: MAIL_SUBJECT.WELCOME_MESSAGE,
      html: MAIL_MESSAGE.WELCOME_MESSAGE(),
      to: user.email,
    });

    return user;
  }

  async findUnique(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async getUserByPhoneNumber(mobileNumber: string) {
    try {
      return await this.prismaService.user.findUnique({
        where: { mobileNumber },
      });
    } catch (err) {
      throw new NotFoundException({
        name: 'user',
        message: MESSAGES.AUTH.USER_NOT_FOUND,
      });
    }
  }

  // confirm account
  async confirmAccount(otp: string, phoneNumberOrEmail: string) {
    const currOtp = await this.otpService.findOne({ code: otp });
    if (!currOtp) throw new UnauthorizedException(MESSAGES.AUTH.INVALID_OTP);

    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            email: { equals: phoneNumberOrEmail.toLowerCase() },
          },
          {
            mobileNumber: { equals: phoneNumberOrEmail },
          },
        ],
        AND: {
          id: currOtp.userId,
        },
      },
    });

    if (!user) return null;

    const otpValidity = await this.otpService.checkOtpValidity({
      mobileNumber: user.mobileNumber,
      otp,
    });

    if (!otpValidity)
      throw new UnauthorizedException(MESSAGES.AUTH.INVALID_OTP);

    await this.otpService.validateOtp({
      mobileNumber: user.mobileNumber,
      otp,
    });

    user.confirmed = true;
    user.updatedAt = new Date();

    await this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        confirmed: true,
      },
    });

    await this.otpService.validateOtp({
      mobileNumber: user.mobileNumber,
      otp,
    });

    return true;
  }

  // request token
  async requestNewOtp(phoneNumberOrEmail: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [
          { email: { equals: phoneNumberOrEmail.toLowerCase() } },
          { mobileNumber: { equals: phoneNumberOrEmail } },
        ],
      },
    });

    if (!user) return true;

    const otp = await this.otpService.createAuthOtp(
      user,
      AUTH_TYPE.REQUEST_NEW_TOKEN,
    );

    await this.mailService.sendMail({
      subject: MAIL_SUBJECT.REGISTER,
      html: MAIL_MESSAGE.REGISTER(otp.code),
      to: user.email,
    });

    return true;
  }

  // request token
  async forgotPassword(phoneNumberOrEmail: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [
          { email: { equals: phoneNumberOrEmail.toLowerCase() } },
          { mobileNumber: { equals: phoneNumberOrEmail } },
        ],
      },
    });
    if (!user) return true;

    const otp = await this.otpService.createAuthOtp(
      user,
      AUTH_TYPE.FORGOT_PASSWORD,
    );

    await this.mailService.sendMail({
      subject: MAIL_SUBJECT.FORGOT_PASSWORD,
      html: MAIL_MESSAGE.FORGOT_PASSWORD(otp.code),
      to: user.email,
    });

    return true;
  }

  async forgotPasswordOtp(otp: string, phoneNumberOrEmail: string) {
    const currOtp = await this.otpService.findOne({
      OR: [
        { email: { equals: phoneNumberOrEmail.toLowerCase() } },
        { mobileNumber: { equals: phoneNumberOrEmail } },
      ],
      AND: { code: { endsWith: otp } },
    });

    if (!currOtp) throw new UnauthorizedException(MESSAGES.AUTH.INVALID_OTP);

    const user = await this.findUnique({ id: currOtp.userId });
    if (!user) return null;

    const otpValidity = await this.otpService.checkOtpValidity({
      mobileNumber: user.mobileNumber,
      otp,
    });

    if (!otpValidity)
      throw new UnauthorizedException(MESSAGES.AUTH.INVALID_OTP);

    return true;
  }

  // forgot password otp verification
  async newPassword(otp: string, phoneNumberOrEmail: string, password: string) {
    const currOtp = await this.otpService.findOne({
      OR: [
        { email: { equals: phoneNumberOrEmail.toLowerCase() } },
        { mobileNumber: { equals: phoneNumberOrEmail } },
      ],
      AND: { code: { endsWith: otp } },
    });

    const user = await this.findUnique({ id: currOtp.userId });
    if (!user) return null;

    const otpValidity = await this.otpService.checkOtpValidity({
      mobileNumber: user.mobileNumber,
      otp,
    });

    if (!otpValidity)
      throw new UnauthorizedException(MESSAGES.AUTH.INVALID_OTP);

    await this.otpService.validateOtp({
      mobileNumber: user.mobileNumber,
      otp,
    });

    const hashedPassword = await argon2.hash(password);

    user.password = hashedPassword;
    user.updatedAt = new Date();

    await this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    await this.otpService.validateOtp({
      mobileNumber: user.mobileNumber,
      otp,
    });

    return true;
  }

  // Multistep form validation
  async validateRegistrationFormOne(input: ValidateFormOneInput) {
    const { email, mobileNumber } = input;
    const emailUsed = await this.findUnique({ email: email.toLowerCase() });
    const mobileNumberUsed = await this.findUnique({
      mobileNumber: mobileNumber,
    });
    if (emailUsed)
      throw new BadRequestException({
        name: 'email',
        message: MESSAGES.AUTH.EMAIL_CONFLICT,
      });
    if (mobileNumberUsed)
      throw new BadRequestException({
        name: 'mobile',
        message: MESSAGES.AUTH.MOBILE_NUMBER_CONFLICT,
      });
    if (input.invite) {
      const referer = await this.prismaService.user.findUnique({
        where: { username: input.invite.toLowerCase() },
      });
      if (!referer) {
        throw new BadRequestException({
          name: 'invite',
          message: MESSAGES.AUTH.USER_NOT_FOUND,
        });
      }
    }
    return true;
  }

  async validateRegistrationFormTwo(input: ValidateFormTwoInput) {
    const { username, password } = input;
    const usernameUsed = await this.findUnique({
      username: username.toLowerCase(),
    });
    if (usernameUsed)
      throw new BadRequestException({
        name: 'username',
        message: MESSAGES.AUTH.USERNAME_CONFLICT,
      });
    if (password.length <= 6)
      throw new BadRequestException({
        name: 'password',
        message: MESSAGES.AUTH.SHORT_PASSWORD,
      });
    return true;
  }

  async resetAccountPassword(
    user: User,
    oldPassword: string,
    newPassword: string,
  ) {
    if (!(await argon2.verify(user.password, oldPassword)))
      throw new BadRequestException({
        password: MESSAGES.AUTH.INVALID_PASSWORD,
      });
    const hashedPassword = await argon2.hash(newPassword);
    return await this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
      },
    });
  }

  async editAccount(userId: number, input: Prisma.UserUpdateInput) {
    return await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        ...input,
      },
    });
  }

  async getAllRegisteredUser() {
    return await this.prismaService.user.findMany({
      where: { role: ROLE.USER },
    });
  }

  async findAllUsers(input?: UserPaginationInput) {
    const { skip, take } = input;
    return await this.prismaService.user.findMany({
      skip,
      take,
      select: {
        id: true,
        wallet: true,
        firstName: true,
        lastName: true,
        email: true,
        dateOfBirth: true,
        mobileNumber: true,
        role: true,
        username: true,
        gender: true,
        vipStatus: true,
        createdAt: true,
        state: true,
        country: true,
        password: true,
        licenseBackImage: true,
        licenseFrontImage: true,
        licenseNumber: true,
        verificationStatus: true,
        verificationType: true,
        disabled: true,
        confirmed: true,
        updatedAt: true,
      },
      where: { role: ROLE.USER },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async totalUserCount() {
    return await this.prismaService.user.aggregate({
      _count: true,
    });
  }

  async toggleUserConfirmationFromAdmin(userId: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    const confimation = user.confirmed ? false : true;

    await this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        confirmed: confimation,
        updatedAt: new Date(),
      },
    });

    return true;
  }

  async updateVerificaionStatusToPending(
    userId: number,
    imageFor: string,
    image: string,
  ) {
    if (imageFor === VERIFICATION.LICENSE_FRONT_IMAGE) {
      await this.prismaService.user.update({
        data: {
          verificationStatus: 'pending',
          licenseFrontImage: image,
        },
        where: {
          id: userId,
        },
      });
    } else if (imageFor === VERIFICATION.LICENSE_BACK_IMAGE) {
      await this.prismaService.user.update({
        data: {
          verificationStatus: 'pending',
          licenseBackImage: image,
        },
        where: {
          id: userId,
        },
      });
    }
  }

  async fetchUserReferrals(userId: number) {
    let users = [];
    let totalInvites = 0;
    const referrals = await this.prismaService.referral.findUnique({
      where: { userId },
    });
    if (!referrals) {
      return {
        users: null,
        totalInvites: 0,
        invitesFunded: 0,
        totalEarned: 0,
      };
    }

    for (let userId of referrals.referrals) {
      const user = await this.findUnique({ id: userId });
      users.push({
        name: `${user.firstName} ${user.lastName}`,
        joined: user.createdAt,
      });
      totalInvites++;
    }
    return {
      users,
      totalInvites,
      invitesFunded: referrals.invitesFunded,
      totalEarned: referrals.totalEarned,
    };
  }
}
