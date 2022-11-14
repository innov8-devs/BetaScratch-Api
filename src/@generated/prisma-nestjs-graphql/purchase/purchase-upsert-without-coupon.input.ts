import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseUpdateWithoutCouponInput } from './purchase-update-without-coupon.input';
import { PurchaseCreateWithoutCouponInput } from './purchase-create-without-coupon.input';

@InputType()
export class PurchaseUpsertWithoutCouponInput {

    @Field(() => PurchaseUpdateWithoutCouponInput, {nullable:false})
    update!: PurchaseUpdateWithoutCouponInput;

    @Field(() => PurchaseCreateWithoutCouponInput, {nullable:false})
    create!: PurchaseCreateWithoutCouponInput;
}
