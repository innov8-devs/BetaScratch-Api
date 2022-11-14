import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';
import { PurchaseCreateWithoutCouponInput } from './purchase-create-without-coupon.input';

@InputType()
export class PurchaseCreateOrConnectWithoutCouponInput {

    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: PurchaseWhereUniqueInput;

    @Field(() => PurchaseCreateWithoutCouponInput, {nullable:false})
    create!: PurchaseCreateWithoutCouponInput;
}
