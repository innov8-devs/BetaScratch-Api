import { COUPON_QUANTITY } from '@generated/prisma-nestjs-graphql/prisma/coupon-quantity.enum';
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateCouponInput {
  @Field(() => Int, { nullable: false })
  percentage!: number;

  @Field(() => Boolean, { nullable: false })
  @IsBoolean()
  capped!: boolean;

  @Field(() => Int, { nullable: false })
  capped_amount!: number;

  @Field(() => String, { nullable: false })
  @IsString()
  code!: string;

  @Field(() => Number, { nullable: false })
  expires!: number;

  @Field(() => COUPON_QUANTITY, { nullable: false })
  quantity!: keyof typeof COUPON_QUANTITY;

  @Field(() => Int, { nullable: true })
  quantity_count?: number;
}

@InputType()
export class CouponSearch {
  @Field(() => Number)
  @IsNumber()
  page: number;

  @Field(() => Number)
  @IsNumber()
  size: number;

  @Field(() => String, { nullable: true })
  orderColumn?: string = 'id';

  @Field(() => String, { nullable: true })
  orderBy?: string = 'asc';
}

@InputType()
export class CouponSubtotal {
  @Field(() => Number)
  @IsNumber()
  subtotal: number;

  @Field(() => String)
  @IsString()
  couponCode: string;
}
