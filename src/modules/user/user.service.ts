import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as argon2 from 'argon2';
import { PrismaService } from '../prisma.service';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { MESSAGES } from '../../core/messages';
import { WalletService } from '../wallet/wallet.service';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { CURRENCY } from '@generated/prisma-nestjs-graphql/prisma/currency.enum';
import {
  AdminLoginInput,
  UserPaginationInput,
  ValidateFormOneInput,
  ValidateFormTwoInput,
} from './dto/user.request';
import { MailService } from 'modules/mail/mail.service';
import { MAIL_MESSAGE, MAIL_SUBJECT } from 'modules/mail/mail.constant';
import { AUTH_TYPE } from 'types/constants/enum';
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
    return user;
  }

  // register
  async register(input: Prisma.UserCreateInput): Promise<User> {
    const errMessage = [];
    const emailUsed = await this.findUnique({ email: input.email });
    const usernameUsed = await this.findUnique({ username: input.username });
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
    const hashedPassword = await argon2.hash(input.password);
    const user = await this.prismaService.user.create({
      data: {
        ...input,
        email: input.email.toLowerCase(),
        password: hashedPassword,
        role: ROLE.USER,
      },
    });

    // TODO currency

    await this.walletService.createWallet({
      bonus: 0,
      user: { connect: { id: user.id } },
      withdrawable: 0,
      currency: CURRENCY.NGN,
    });

    const otp = await this.otpService.createAuthOtp(
      user,
      AUTH_TYPE.CONFIRM_USER_PREFIX,
    );

    await this.mailService.sendMail({
      subject: MAIL_SUBJECT.REGISTER,
      html: MAIL_MESSAGE.REGISTER(otp.code),
      to: user.email,
    });

    return user;
  }

  // Admin Login
  async adminLogin(input: AdminLoginInput, req: any) {
    const { password, email } = input;
    const errMessage = [];
    const user = await this.findUnique({ email });
    if (!user) errMessage.push(MESSAGES.AUTH.INVALID_CREDENTIALS);
    if (errMessage.length) throw new BadRequestException(errMessage);
    if (user.role !== ROLE.ADMIN) errMessage.push(MESSAGES.AUTH.UNAUTHORIZED);
    const valid = await argon2.verify(user.password, password);
    if (!valid) errMessage.push(MESSAGES.AUTH.INVALID_CREDENTIALS);
    if (errMessage.length) throw new BadRequestException(errMessage);
    req.session.userId = user.id;
    return user;
  }

  // logout
  // async logout(req: any, res: any): Promise<Boolean> {
  //   return new Promise((resolve) =>
  //     req.session.destroy((err: any) => {
  //       res.clearCookie(COOKIE_NAME);
  //       if (err) {
  //         resolve(false);
  //         return;
  //       }
  //       resolve(true);
  //     }),
  //   );
  // }

  // forgot password
  // async forgotPassword(email: string, redis: any) {
  //   const user = await this.findUnique({ email });
  //   if (!user) return true;

  //   const token = v4();

  //   await redis.set(
  //     FORGET_PASSWORD_PREFIX + token,
  //     user.id as any,
  //     'ex',
  //     60 * 60,
  //   ); // 1 hr

  //   await this.mailService.sendMail({
  //     subject: MAIL_SUBJECT.FORGOT_PASSWORD,
  //     html: MAIL_MESSAGE.FORGOT_PASSWORD(
  //       `<a href="${process.env.CORS_ORIGIN}/user/reset-password/${token}">reset password</a>`,
  //     ),
  //     to: user.email,
  //   });

  //   return true;
  // }

  //change password
  // async resetPassword(input: ChangePasswordInput, redis: any, req: any) {
  //   const errMessage = [];
  //   const { newPassword, token } = input;
  //   if (newPassword.length < 6) errMessage.push(MESSAGES.AUTH.SHORT_PASSWORD);
  //   if (errMessage.length) throw new BadRequestException(errMessage);
  //   const key = FORGET_PASSWORD_PREFIX + token;
  //   const userId = await redis.get(key);
  //   if (!userId) errMessage.push(MESSAGES.AUTH.INVALID_TOKEN);
  //   if (errMessage.length) throw new BadRequestException(errMessage);
  //   const user = await this.findUnique({ id: Number(userId) });
  //   if (!user) errMessage.push(MESSAGES.AUTH.INVALID_TOKEN);
  //   if (errMessage.length) throw new BadRequestException(errMessage);
  //   let newResetPassword = await argon2.hash(newPassword);
  //   await this.prisma.user.update({
  //     where: {
  //       id: Number(userId),
  //     },
  //     data: {
  //       password: newResetPassword,
  //       updatedAt: new Date(),
  //     },
  //   });
  //   await redis.del(key);
  //   // log user in when password change is successful
  //   req.session.userId = user.id;
  //   return true;
  // }

  // confirm account
  // async confirmAcount(token: string, redis: any, req: any): Promise<Boolean> {
  //   const errMessage = [];
  //   const key = CONFIRM_USER_PREFIX + token;
  //   const userId = await redis.get(key);

  //   if (!userId) errMessage.push(MESSAGES.AUTH.INVALID_TOKEN);
  //   const user = await this.findUnique({ id: Number(userId) });

  //   if (errMessage.length) throw new BadRequestException(errMessage);

  //   user.confirmed = true;
  //   user.updatedAt = new Date();

  //   await this.prisma.user.update({
  //     where: {
  //       id: user.id,
  //     },
  //     data: {
  //       confirmed: true,
  //     },
  //   });

  //   await redis.del(key);

  //   // log user in when password change is successful
  //   req.session.userId = user.id;

  //   return true;
  // }

  // request token
  // async requestNewToken(email: string, redis: any) {
  //   const user = await this.findUnique({ email });

  //   if (!user) return true;

  //   const token = v4();

  //   await redis.set(CONFIRM_USER_PREFIX + token, user.id as any, 'ex', 60 * 60); // 1 hour

  //   await this.mailService.sendMail({
  //     subject: MAIL_SUBJECT.VERIFY_ACCOUNT,
  //     html: MAIL_MESSAGE.VERIFY_ACCOUNT(
  //       `<a href="${process.env.CORS_ORIGIN}/user/confirm-account/${token}">confirm account</a>`,
  //     ),
  //     to: user.email,
  //   });

  //   return true;
  // }

  async findUnique(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: userWhereUniqueInput,
    });
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
    return true;
  }

  async validateRegistrationFormTwo(input: ValidateFormTwoInput) {
    const { username, password } = input;
    const usernameUsed = await this.findUnique({ username });
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
        createdAt: true,
        state: true,
        country: true,
        password: true,
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
}
