import { Module } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CouponResolver } from './coupon.resolver';
import { PrismaService } from 'modules/prisma.service';

@Module({
  providers: [CouponResolver, CouponService, PrismaService],
  exports: [CouponModule],
})
export class CouponModule {}
