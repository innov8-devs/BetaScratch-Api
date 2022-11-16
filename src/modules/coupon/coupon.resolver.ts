import { Coupon } from '@generated/prisma-nestjs-graphql/coupon/coupon.model';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { CouponService } from './coupon.service';
import {
  CouponSearch,
  CouponSubtotal,
  CreateCouponInput,
} from './dto/request.dto';
import { CouponSubtotalResponse } from './dto/response.dto';

@Resolver()
export class CouponResolver {
  constructor(private readonly couponService: CouponService) {}

  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async createCouponFromAdmin(@Args('input') input: CreateCouponInput) {
    return await this.couponService.create(input);
  }

  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async invalidateCouponFromAdmin(@Args('code') code: string) {
    return await this.couponService.invalidateCoupon(code);
  }

  @Auth([ROLE.USER])
  @Query(() => Boolean)
  async checkCouponValidity(@Args('code') code: string) {
    return await this.couponService.checkValidity(code);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => Coupon, { nullable: true })
  async getCouponFromAdmin(@Args('id') id: number) {
    return await this.couponService.findOne(id);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => [Coupon], { nullable: true })
  async getAllCouponsFromAdmin(@Args('input') input: CouponSearch) {
    return await this.couponService.findAll(input);
  }

  @Auth([ROLE.USER])
  @Query(() => CouponSubtotalResponse, { nullable: true })
  async calculateCouponSubtotal(@Args('input') input: CouponSubtotal) {
    return await this.couponService.calculateCouponSubtotal(input);
  }
}
