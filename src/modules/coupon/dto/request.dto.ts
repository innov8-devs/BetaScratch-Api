import { COUPON_TYPE } from '@generated/prisma-nestjs-graphql/prisma/coupon-type.enum';
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@InputType()
export class CreateCouponInput {
  @Field(() => String, { nullable: false })
  @IsString()
  code!: string;

  @Field(() => Boolean, { nullable: false, defaultValue: true })
  @IsBoolean()
  validity!: boolean;

  @Field(() => Int, { nullable: false })
  expireMinutes!: number;

  @Field(() => COUPON_TYPE, { nullable: false })
  type!: keyof typeof COUPON_TYPE;

  @Field(() => Int, { nullable: true })
  percentage?: number;

  @Field(() => Int, { nullable: true })
  amount?: number;
}
