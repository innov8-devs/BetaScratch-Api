import { Otp } from '@generated/prisma-nestjs-graphql/otp/otp.model';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MESSAGES } from 'core/messages';
import { PrismaService } from 'modules/prisma.service';
import { addMinutes } from 'utils/date.util';
import { generateOtp } from 'utils/generateOtp';
import { OtpValidityInput, ValidateOtpInput } from './dto/otp-request.dto';

@Injectable()
export class OtpService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createAuthOtp(user: User, subject: string) {
    return await this.prismaService.otp.create({
      data: {
        email: user.email,
        code: generateOtp(),
        expire: addMinutes(new Date(), 15),
        mobileNumber: user.mobileNumber,
        subject,
        validity: true,
        user: { connect: { id: user.id } },
      },
    });
  }

  public async validateOtp(input: ValidateOtpInput) {
    const otp = await this.prismaService.otp.findFirst({
      where: {
        AND: [
          {
            code: {
              equals: input.otp,
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
    if (!otp) throw new UnauthorizedException(MESSAGES.AUTH.INVALID_OTP);
    // const expired = new Date() > otp.expire;
    // const valid = otp.validity;

    // if (!valid || expired)
    //   throw new UnauthorizedException(MESSAGES.AUTH.INVALID_OTP);

    await this.prismaService.otp.update({
      where: {
        id: otp.id,
      },
      data: {
        validity: false,
      },
    });
    return otp;
  }

  async checkOtpValidity(input: OtpValidityInput): Promise<Boolean> {
    const { mobileNumber, otp } = input;
    const OTP = await this.prismaService.otp.findFirst({
      where: {
        AND: [
          {
            code: {
              equals: otp,
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
    if (OTP && OTP.validity) return true;
    return false;
  }

  async findOne(otpWhereInput: Prisma.OtpWhereInput): Promise<Otp> {
    return await this.prismaService.otp.findFirst({
      where: otpWhereInput,
    });
  }
}
