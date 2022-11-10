import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MESSAGES } from 'core/messages';
import { PrismaService } from 'modules/prisma.service';
import { unixDate } from 'utils/date.util';
import { CouponSearch, CreateCouponInput } from './dto/request.dto';

@Injectable()
export class CouponService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(input: CreateCouponInput): Promise<Boolean> {
    const {
      code,
      expires,
      percentage,
      capped,
      capped_amount,
      quantity,
      quantity_count,
    } = input;
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

      const expiryHours = unixDate({ hours: expires });

      await this.prismaService.coupon.create({
        data: {
          capped,
          cappedAmount: capped_amount,
          code,
          expires: expiryHours,
          percentage,
          status: true,
          quantity,
          quantityCount: quantity_count,
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
      if (!coupon.status) return false;
      if (unixDate({}) > coupon.expires) return false;
      return true;
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
        data: { status: false },
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

  async findAll(input: CouponSearch) {
    const { page, size } = input;
    let skipValue = page * size - size;
    try {
      return await this.prismaService.coupon.findMany({
        take: size,
        skip: skipValue,
        orderBy: {
          id: 'desc',
        },
      });
    } catch (err) {
      throw new NotFoundException({
        name: 'coupon',
        message: err,
      });
    }
  }
}
