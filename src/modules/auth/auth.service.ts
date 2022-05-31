import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import {
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
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { AUTH_TYPE } from 'types/constants/enum';
import { MailService } from 'modules/mail/mail.service';
import { MAIL_MESSAGE, MAIL_SUBJECT } from 'modules/mail/mail.constant';
import { AdminLoginInput } from 'modules/user/dto/user.request';

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
  ): Promise<User> {
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

    if (!userPass || user.confirmed === false)
      throw new UnauthorizedException({
        name: 'confirm',
        message: MESSAGES.AUTH.CONFIRM_ACCOUNT,
      });

    if (await argon2.verify(userPass, password)) return user;
    return null;
  }

  public async generateAccessToken(payload: any) {
    console.log(this.otpService);
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

  async login(user: User) {
    const auth: User = user;
    return { auth };
  }

  async requestAdminLoginOtp(input: AdminLoginInput) {
    const user = await this.validateUser(input.email, input.password);

    if (user.role !== ROLE.ADMIN) {
      throw new ForbiddenException({
        name: 'login',
        message: MESSAGES.AUTH.UNAUTHORIZED,
      });
    }

    const otp = await this.otpService.createAuthOtp(
      user,
      AUTH_TYPE.ADMIN_LOGIN,
    );

    await this.mailService.sendMail({
      subject: MAIL_SUBJECT.ADMIN_LOGIN,
      html: MAIL_MESSAGE.ADMIN_LOGIN(otp.code),
      to: user.email,
    });

    return true;
  }

  async adminLogin(user: User, otp: string) {
    console.log(user);
    if (!user) {
      throw new UnauthorizedException({
        name: 'user',
        message: MESSAGES.AUTH.USER_NOT_FOUND,
      });
    }

    const currOtp = await this.otpService.findOne({ code: otp });

    const isValid = await this.otpService.checkOtpValidity({
      mobileNumber: user.mobileNumber,
      otp,
    });

    if (!currOtp || !isValid) {
      throw new UnauthorizedException({
        name: 'otp',
        message: MESSAGES.AUTH.INVALID_OTP,
      });
    }

    await this.otpService.validateOtp({
      mobileNumber: user.mobileNumber,
      otp,
    });

    const auth: User = user;
    return { auth };
  }

  async setAccessTokenHeaderCredentials(userId: number, res: Response) {
    const payload = { sub: userId };
    const accessToken = await this.generateAccessToken(payload);
    res.append('Access-Control-Expose-Headers', ['access_token']);
    res.append('access_token', accessToken);
    res.cookie('access_token', accessToken, {
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    });
  }

  async setRefreshTokenHeaderCredentials(userId: number, res: Response) {
    const payload = { sub: userId };
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
