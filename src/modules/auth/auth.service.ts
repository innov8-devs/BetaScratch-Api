import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as argon2 from 'argon2';
import { MESSAGES } from 'core/messages';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'modules/prisma.service';
import { Response } from 'express';
import { OtpService } from 'modules/otp/otp.service';
import { AUTH_TYPE } from 'types/constants/enum';
import { MailService } from 'modules/mail/mail.service';
import { MAIL_MESSAGE, MAIL_SUBJECT } from 'modules/mail/mail.constant';
import {
  AdminLoginInput,
  AdminLoginOtpInput,
  LoginInput,
} from 'modules/user/dto/user.request';
import { Admin } from '@generated/prisma-nestjs-graphql/admin/admin.model';
import { authTypeGetterFn } from 'utils/authType';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwt: JwtService,
    private configService: ConfigService,
    private readonly otpService: OtpService,
    private readonly mailService: MailService,
  ) {}

  async validateUser(
    phoneNumberOrEmail: string,
    password: string,
  ): Promise<User | Admin> {
    const isAdmin = authTypeGetterFn();
    if (isAdmin) {
      const admin = await this.prismaService.admin.findFirst({
        where: {
          username: phoneNumberOrEmail.toLowerCase(),
        },
      });
      if (!admin) return null;
      const adminPass = admin.password;

      if (await argon2.verify(adminPass, password)) return admin;
      return null;
    } else {
      const user = await this.prismaService.user.findFirst({
        where: {
          OR: [
            {
              email: {
                equals: phoneNumberOrEmail.toLowerCase(),
              },
            },
            {
              mobileNumber: {
                equals: phoneNumberOrEmail,
              },
            },
          ],
        },
        include: { wallet: true },
      });
      if (!user) return null;
      const userPass = user.password;

      if (user.disabled) {
        throw new UnauthorizedException({
          name: 'account',
          message: MESSAGES.ACCOUNT.DISABLED,
        });
      }

      if (!userPass || user.confirmed === false)
        throw new UnauthorizedException({
          name: 'confirm',
          message: MESSAGES.AUTH.CONFIRM_ACCOUNT,
        });

      if (await argon2.verify(userPass, password)) return user;
      return null;
    }
  }

  public async generateAccessToken(payload: any) {
    const algorithm: any = process.env.JWT_ALGORITHM;
    const secret = this.configService.get('token.access.secret');
    const expiresIn = this.configService.get('token.access.expiration');
    return await this.jwt.signAsync(payload, { algorithm, expiresIn, secret });
  }

  public async generateRefreshToken(payload: any) {
    const algorithm: any = process.env.JWT_ALGORITHM;
    const secret = this.configService.get('token.refresh.secret');
    const expiresIn = this.configService.get('token.refresh.expiration');
    return await this.jwt.signAsync(payload, { algorithm, expiresIn, secret });
  }

  async login(input: LoginInput) {
    return await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            email: {
              equals: input.phoneNumberOrEmail.toLowerCase(),
            },
          },
          {
            mobileNumber: {
              equals: input.phoneNumberOrEmail,
            },
          },
        ],
      },
      include: { wallet: true },
    });
  }

  async requestAdminLoginOtp(input: AdminLoginOtpInput) {
    const admin = await this.prismaService.admin.findUnique({
      where: { username: input.username.toLowerCase() },
    });

    const passwordValid = await argon2.verify(admin.password, input.password);

    if (!passwordValid) {
      throw new BadRequestException({
        name: 'password',
        message: MESSAGES.AUTH.INVALID_CREDENTIALS,
      });
    }

    if (!admin.role.includes('ADMIN')) {
      throw new ForbiddenException({
        name: 'login',
        message: MESSAGES.AUTH.UNAUTHORIZED,
      });
    }

    const otp = await this.otpService.createAdminAuthOtp(
      admin,
      AUTH_TYPE.ADMIN_LOGIN,
    );

    await this.mailService.sendMail({
      subject: MAIL_SUBJECT.ADMIN_LOGIN,
      html: MAIL_MESSAGE.ADMIN_LOGIN(otp.code),
      to: admin.email,
    });

    return true;
  }

  async adminLogin(input: AdminLoginInput) {
    const { otp } = input;

    const admin = await this.prismaService.admin.findFirst({
      where: { username: input.username.toLowerCase() },
    });

    if (!admin) {
      throw new UnauthorizedException({
        name: 'user',
        message: MESSAGES.AUTH.USER_NOT_FOUND,
      });
    }

    const currOtp = await this.otpService.findOne({ code: otp });

    const isValid = await this.otpService.checkOtpValidity({
      mobileNumber: admin.mobileNumber,
      otp,
    });

    if (!currOtp || !isValid) {
      throw new UnauthorizedException({
        name: 'otp',
        message: MESSAGES.AUTH.INVALID_OTP,
      });
    }

    await this.otpService.validateOtp({
      mobileNumber: admin.mobileNumber,
      otp,
    });

    return admin;
  }

  async setAccessTokenHeaderCredentials(
    userId: number,
    res: Response,
    isAdmin: boolean,
  ) {
    const payload = isAdmin
      ? { sub: userId, isAdmin: true }
      : { sub: userId, isAdmin: false };
    const accessToken = await this.generateAccessToken(payload);
    res.append('Access-Control-Expose-Headers', ['access_token']);
    res.append('access_token', accessToken);
    res.cookie('access_token', accessToken, {
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    });
  }

  async setRefreshTokenHeaderCredentials(
    userId: number,
    res: Response,
    isAdmin: boolean,
  ) {
    const payload = isAdmin
      ? { sub: userId, isAdmin: true }
      : { sub: userId, isAdmin: false };
    const refreshToken = await this.generateRefreshToken(payload);
    res.append('Access-Control-Expose-Headers', ['refresh_token']);
    res.append('refresh_token', refreshToken);
    res.cookie('refresh_token', refreshToken, {
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    });
  }
}
