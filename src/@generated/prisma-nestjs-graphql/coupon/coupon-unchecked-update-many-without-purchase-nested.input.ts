import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CouponCreateWithoutPurchaseInput } from './coupon-create-without-purchase.input';
import { CouponCreateOrConnectWithoutPurchaseInput } from './coupon-create-or-connect-without-purchase.input';
import { CouponUpsertWithWhereUniqueWithoutPurchaseInput } from './coupon-upsert-with-where-unique-without-purchase.input';
import { CouponCreateManyPurchaseInputEnvelope } from './coupon-create-many-purchase-input-envelope.input';
import { CouponWhereUniqueInput } from './coupon-where-unique.input';
import { CouponUpdateWithWhereUniqueWithoutPurchaseInput } from './coupon-update-with-where-unique-without-purchase.input';
import { CouponUpdateManyWithWhereWithoutPurchaseInput } from './coupon-update-many-with-where-without-purchase.input';
import { CouponScalarWhereInput } from './coupon-scalar-where.input';

@InputType()
export class CouponUncheckedUpdateManyWithoutPurchaseNestedInput {

    @Field(() => [CouponCreateWithoutPurchaseInput], {nullable:true})
    create?: Array<CouponCreateWithoutPurchaseInput>;

    @Field(() => [CouponCreateOrConnectWithoutPurchaseInput], {nullable:true})
    connectOrCreate?: Array<CouponCreateOrConnectWithoutPurchaseInput>;

    @Field(() => [CouponUpsertWithWhereUniqueWithoutPurchaseInput], {nullable:true})
    upsert?: Array<CouponUpsertWithWhereUniqueWithoutPurchaseInput>;

    @Field(() => CouponCreateManyPurchaseInputEnvelope, {nullable:true})
    createMany?: CouponCreateManyPurchaseInputEnvelope;

    @Field(() => [CouponWhereUniqueInput], {nullable:true})
    set?: Array<CouponWhereUniqueInput>;

    @Field(() => [CouponWhereUniqueInput], {nullable:true})
    disconnect?: Array<CouponWhereUniqueInput>;

    @Field(() => [CouponWhereUniqueInput], {nullable:true})
    delete?: Array<CouponWhereUniqueInput>;

    @Field(() => [CouponWhereUniqueInput], {nullable:true})
    connect?: Array<CouponWhereUniqueInput>;

    @Field(() => [CouponUpdateWithWhereUniqueWithoutPurchaseInput], {nullable:true})
    update?: Array<CouponUpdateWithWhereUniqueWithoutPurchaseInput>;

    @Field(() => [CouponUpdateManyWithWhereWithoutPurchaseInput], {nullable:true})
    updateMany?: Array<CouponUpdateManyWithWhereWithoutPurchaseInput>;

    @Field(() => [CouponScalarWhereInput], {nullable:true})
    deleteMany?: Array<CouponScalarWhereInput>;
}
