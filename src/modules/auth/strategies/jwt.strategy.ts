import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { JWTPayload } from 'types/interface/jwt.payload';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { PrismaService } from 'modules/prisma.service';
import { Admin } from '@generated/prisma-nestjs-graphql/admin/admin.model';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prismaService: PrismaService) {
    super({
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_TOKEN_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JWTPayload): Promise<User | Admin> {
    if (payload.isAdmin) {
      return await this.prismaService.admin.findUnique({
        where: { id: payload.sub },
      });
    } else {
      return await this.prismaService.user.findUnique({
        where: { id: payload.sub },
        include: { wallet: true },
      });
    }
  }
}
