import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CouponCreateWithoutPurchaseInput } from './coupon-create-without-purchase.input';
import { CouponCreateOrConnectWithoutPurchaseInput } from './coupon-create-or-connect-without-purchase.input';
import { CouponCreateManyPurchaseInputEnvelope } from './coupon-create-many-purchase-input-envelope.input';
import { CouponWhereUniqueInput } from './coupon-where-unique.input';

@InputType()
export class CouponUncheckedCreateNestedManyWithoutPurchaseInput {

    @Field(() => [CouponCreateWithoutPurchaseInput], {nullable:true})
    create?: Array<CouponCreateWithoutPurchaseInput>;

    @Field(() => [CouponCreateOrConnectWithoutPurchaseInput], {nullable:true})
    connectOrCreate?: Array<CouponCreateOrConnectWithoutPurchaseInput>;

    @Field(() => CouponCreateManyPurchaseInputEnvelope, {nullable:true})
    createMany?: CouponCreateManyPurchaseInputEnvelope;

    @Field(() => [CouponWhereUniqueInput], {nullable:true})
    connect?: Array<CouponWhereUniqueInput>;
}
