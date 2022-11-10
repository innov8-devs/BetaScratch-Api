import { Coupon } from '@generated/prisma-nestjs-graphql/coupon/coupon.model';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Auth } from 'modules/auth/decorators/auth.decorator';
import { CouponService } from './coupon.service';
import { CouponSearch, CreateCouponInput } from './dto/request.dto';

@Resolver()
export class CouponResolver {
  constructor(private readonly couponService: CouponService) {}

  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async createCoupon(@Args('input') input: CreateCouponInput) {
    return await this.couponService.create(input);
  }

  @Auth([ROLE.ADMIN])
  @Mutation(() => Boolean)
  async invalidateCoupon(@Args('code') code: string) {
    return await this.couponService.invalidateCoupon(code);
  }

  @Auth([ROLE.USER])
  @Query(() => Boolean)
  async checkCouponValidity(@Args('code') code: string) {
    return await this.couponService.checkValidity(code);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => Coupon, { nullable: true })
  async findOneCouponFromAdmin(@Args('id') id: number) {
    return await this.couponService.findOne(id);
  }

  @Auth([ROLE.ADMIN])
  @Query(() => [Coupon], { nullable: true })
  async findAllCouponsFromAdmin(@Args('input') input: CouponSearch) {
    return await this.couponService.findAll(input);
  }
}
