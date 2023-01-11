import { COUPON_QUANTITY } from '@generated/prisma-nestjs-graphql/prisma/coupon-quantity.enum';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { MESSAGES } from 'core/messages';
import { PrismaService } from 'modules/prisma.service';
import { calculateCouponSubtotal } from 'utils/calculateCouponSubtotal';
import { daysToUnix, unixToDaysLeft } from 'utils/date.util';
import {
  CouponSearch,
  CouponSubtotal,
  CreateCouponInput,
} from './dto/request.dto';

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

      const expiryHours = daysToUnix(expires);
      console.log(expiryHours);

      await this.prismaService.coupon.create({
        data: {
          capped,
          cappedAmount: capped_amount,
          code,
          expires: `${daysToUnix(expires)}`,
          percentage,
          status: 'active',
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
      if (unixToDaysLeft(Number(coupon.expires)) > Number(coupon.expires))
        return false;
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
        data: { status: 'inactive' },
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
    const { page, size, orderBy, orderColumn } = input;
    let skipValue = page * size - size;
    try {
      return await this.prismaService.coupon.findMany({
        take: size,
        skip: skipValue,
        orderBy: {
          [orderColumn]: orderBy,
        },
      });
    } catch (err) {
      throw new NotFoundException({
        name: 'coupon',
        message: err,
      });
    }
  }

  async calculateCouponSubtotal(
    input: CouponSubtotal,
  ): Promise<{ couponStatus: boolean; subtotal: number; reason: string }> {
    const { couponCode, subtotal } = input;
    try {
      const coupon = await this.prismaService.coupon.findUnique({
        where: { code: couponCode },
      });

      if (!coupon) {
        return {
          couponStatus: false,
          subtotal,
          reason: MESSAGES.COUPON.N0T_FOUND,
        };
      }

      if (
        unixToDaysLeft(Number(coupon.expires)) <= 0 ||
        coupon.status === 'inactive'
      ) {
        return {
          couponStatus: false,
          subtotal,
          reason: MESSAGES.COUPON.EXPIRED,
        };
      }

      if (
        coupon.quantity === COUPON_QUANTITY.LIMITED &&
        coupon.quantityUsed >= coupon.quantityCount
      ) {
        return {
          couponStatus: false,
          subtotal,
          reason: MESSAGES.COUPON.NOT_AVAILABLE,
        };
      }

      const couponSubtotal = coupon.capped
        ? calculateCouponSubtotal(subtotal, coupon.percentage)
        : calculateCouponSubtotal(
            subtotal,
            coupon.percentage,
            coupon.cappedAmount,
          );

      return {
        couponStatus: true,
        subtotal: couponSubtotal,
        reason: 'Successful',
      };
    } catch (err) {
      throw new NotFoundException({
        name: 'coupon',
        message: err,
      });
    }
  }

  async incrementCouponQuantityUsed(code: string) {
    await this.prismaService.coupon.update({
      where: { code },
      data: { quantityUsed: { increment: 1 } },
    });
  }
}
