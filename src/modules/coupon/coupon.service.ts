import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MESSAGES } from 'core/messages';
import { PrismaService } from 'modules/prisma.service';
import { addMinutes } from 'utils/date.util';
import { CreateCouponInput } from './dto/request.dto';

@Injectable()
export class CouponService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreateCouponInput): Promise<Boolean> {
    const { code, expireMinutes, percentage, cap, capAmount, status } = input;
    try {
      const couponExist = await this.prismaService.coupon.findUnique({
        where: { code },
      });
      if (couponExist) {
        throw new BadRequestException({
          name: 'coupon',
          message: MESSAGES.COUPON.COUPON_CONFLICT,
        });
      }

      if (percentage > 100) {
        throw new BadRequestException({
          name: 'coupon',
          message: MESSAGES.COUPON.PERCENTAGE_TOO_HIGH,
        });
      }

      await this.prismaService.coupon.create({
        data: {
          expire: addMinutes(new Date(), expireMinutes),
          cap,
          capAmount,
          code,
          percentage,
          status,
          validity: true,
        },
      });
      return true;
    } catch (err) {
      throw new BadRequestException({
        name: 'coupon',
        message: MESSAGES.COUPON.UNABLE_TO_CREATE,
      });
    }
  }

  async checkValidity(code: string) {
    try {
      const coupon = await this.prismaService.coupon.findUnique({
        where: { code },
      });
      if (!coupon.validity) return false;
      // ? Check for the time validation later
    } catch (err) {
      throw new BadRequestException({
        name: 'coupon',
        message: MESSAGES.COUPON.UNABLE_TO_CHECK_VALIDITY,
      });
    }
  }

  async invalidateCoupon(code: string) {
    try {
      await this.prismaService.coupon.update({
        where: { code },
        data: { validity: false },
      });
      return true;
    } catch (err) {
      throw new BadRequestException({
        name: 'coupon',
        message: MESSAGES.COUPON.UNABLE_TO_INVALIDATE,
      });
    }
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.coupon.findUnique({ where: { id } });
    } catch (err) {
      throw new NotFoundException({
        name: 'coupon',
        message: err,
      });
    }
  }

  async findAll() {
    try {
      return await this.prismaService.coupon.findMany();
    } catch (err) {
      throw new NotFoundException({
        name: 'coupon',
        message: err,
      });
    }
  }
}
