import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CouponWhereUniqueInput } from './coupon-where-unique.input';
import { CouponUpdateWithoutPurchaseInput } from './coupon-update-without-purchase.input';

@InputType()
export class CouponUpdateWithWhereUniqueWithoutPurchaseInput {

    @Field(() => CouponWhereUniqueInput, {nullable:false})
    where!: CouponWhereUniqueInput;

    @Field(() => CouponUpdateWithoutPurchaseInput, {nullable:false})
    data!: CouponUpdateWithoutPurchaseInput;
}
