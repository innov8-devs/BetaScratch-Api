import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CouponSubtotalResponse {
  @Field()
  subtotal: number;

  @Field()
  reason: string;

  @Field()
  couponStatus: boolean;
}
