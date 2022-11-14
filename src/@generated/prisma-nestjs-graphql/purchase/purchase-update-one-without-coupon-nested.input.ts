import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseCreateWithoutCouponInput } from './purchase-create-without-coupon.input';
import { PurchaseCreateOrConnectWithoutCouponInput } from './purchase-create-or-connect-without-coupon.input';
import { PurchaseUpsertWithoutCouponInput } from './purchase-upsert-without-coupon.input';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';
import { PurchaseUpdateWithoutCouponInput } from './purchase-update-without-coupon.input';

@InputType()
export class PurchaseUpdateOneWithoutCouponNestedInput {

    @Field(() => PurchaseCreateWithoutCouponInput, {nullable:true})
    create?: PurchaseCreateWithoutCouponInput;

    @Field(() => PurchaseCreateOrConnectWithoutCouponInput, {nullable:true})
    connectOrCreate?: PurchaseCreateOrConnectWithoutCouponInput;

    @Field(() => PurchaseUpsertWithoutCouponInput, {nullable:true})
    upsert?: PurchaseUpsertWithoutCouponInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PurchaseWhereUniqueInput, {nullable:true})
    connect?: PurchaseWhereUniqueInput;

    @Field(() => PurchaseUpdateWithoutCouponInput, {nullable:true})
    update?: PurchaseUpdateWithoutCouponInput;
}
