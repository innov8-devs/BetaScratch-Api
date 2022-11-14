import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseCreateWithoutCouponInput } from './purchase-create-without-coupon.input';
import { PurchaseCreateOrConnectWithoutCouponInput } from './purchase-create-or-connect-without-coupon.input';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';

@InputType()
export class PurchaseCreateNestedOneWithoutCouponInput {

    @Field(() => PurchaseCreateWithoutCouponInput, {nullable:true})
    create?: PurchaseCreateWithoutCouponInput;

    @Field(() => PurchaseCreateOrConnectWithoutCouponInput, {nullable:true})
    connectOrCreate?: PurchaseCreateOrConnectWithoutCouponInput;

    @Field(() => PurchaseWhereUniqueInput, {nullable:true})
    connect?: PurchaseWhereUniqueInput;
}
