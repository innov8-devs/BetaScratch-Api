import { Token } from '@generated/prisma-nestjs-graphql/token/token.model';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MESSAGES } from 'core/messages';
import { PrismaService } from 'modules/prisma.service';
import { addMinutes } from 'utils/date.util';
import { generateRandomString } from 'utils/generateRandomString.util';
import {
  TokenValidityInput,
  ValidateTokenInput,
} from './dto/token-request.dto';

@Injectable()
export class TokenService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createAuthOtp(user: User, subject: string) {
    return await this.prismaService.token.create({
      data: {
        code: generateRandomString(),
        expire: addMinutes(new Date(), 15),
        mobileNumber: user.mobileNumber,
        subject,
        validity: true,
        user: { connect: { id: user.id } },
      },
    });
  }

  public async validateOtp(input: ValidateTokenInput) {
    const token = await this.prismaService.token.findFirst({
      where: {
        AND: [
          {
            code: {
              equals: input.token,
            },
          },
          {
            mobileNumber: {
              equals: input.mobileNumber,
            },
          },
        ],
      },
    });
    if (!token) throw new UnauthorizedException(MESSAGES.AUTH.INVALID_TOKEN);
    const expired = new Date() > token.expire;
    const valid = token.validity;

    if (!valid || expired)
      throw new UnauthorizedException(MESSAGES.AUTH.EXPIRED_OTP);

    await this.prismaService.token.update({
      where: {
        id: token.id,
      },
      data: {
        validity: false,
      },
    });

    return token;
  }

  async checkTokenValidity(input: TokenValidityInput): Promise<Boolean> {
    const { mobileNumber, token } = input;
    const TOKEN = await this.prismaService.token.findFirst({
      where: {
        AND: [
          {
            code: {
              equals: token,
            },
          },
          {
            mobileNumber: {
              equals: mobileNumber,
            },
          },
        ],
      },
    });
    if (TOKEN && TOKEN.validity) return true;
    return false;
  }

  async findOne(tokenWhereInput: Prisma.TokenWhereInput): Promise<Token> {
    return await this.prismaService.token.findFirst({
      where: tokenWhereInput,
    });
  }
}
