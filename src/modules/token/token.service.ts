import { Admin } from '@generated/prisma-nestjs-graphql/admin/admin.model';
import { Token } from '@generated/prisma-nestjs-graphql/token/token.model';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MESSAGES } from 'core/messages';
import { PrismaService } from 'modules/prisma.service';
import { addMinutes } from 'utils/date.util';
import { generateToken } from 'utils/generateToken';
import { TokenValidityInput, ValidateTokenInput } from './dto/token.request';

@Injectable()
export class TokenService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createAuthToken(user: User, subject: string) {
    return await this.prismaService.token.create({
      data: {
        email: user.email,
        code: generateToken(),
        expire: addMinutes(new Date(), 24),
        mobileNumber: user.mobileNumber,
        subject,
        validity: true,
        user: { connect: { id: user.id } },
      },
    });
  }

  public async createAdminAuthToken(admin: Admin, subject: string) {
    return await this.prismaService.token.create({
      data: {
        email: admin.email,
        code: generateToken(),
        expire: addMinutes(new Date(), 15),
        mobileNumber: admin.mobileNumber,
        subject,
        validity: true,
        admin: { connect: { id: admin.id } },
      },
    });
  }

  public async validateToken(input: ValidateTokenInput) {
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

  async findOne(otpWhereInput: Prisma.TokenWhereInput): Promise<Token> {
    return await this.prismaService.token.findFirst({
      where: otpWhereInput,
      include: {
        user: true,
      },
    });
  }
}
