import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as argon2 from 'argon2';
// import { AuthResponse } from './dto/auth.response.dto';
import { MESSAGES } from 'core/messages';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'modules/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwt: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { username },
    });
    if (!user) return null;
    const userPass = user.password;

    if (!userPass || user.confirmed === false)
      throw new UnauthorizedException({ name: "confirm", message: MESSAGES.AUTH.CONFIRM_ACCOUNT});

    if (await argon2.verify(userPass, password)) return user;
    return null;
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

  async login(user: User) {
    // const auth: AuthResponse = user;
    const auth: User = user;
    // const payload = AuthService.jwtPayload(user);
    // auth.token = await this.generateAccessToken(payload);
    // const refreshToken = await this.generateRefreshToken(payload);
    return { auth };
  }

  // private static jwtPayload(user: User) {
  //   return { sub: user.id };
  // }
}
