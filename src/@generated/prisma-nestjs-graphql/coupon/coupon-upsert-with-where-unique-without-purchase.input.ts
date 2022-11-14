import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CouponWhereUniqueInput } from './coupon-where-unique.input';
import { CouponUpdateWithoutPurchaseInput } from './coupon-update-without-purchase.input';
import { CouponCreateWithoutPurchaseInput } from './coupon-create-without-purchase.input';

@InputType()
export class CouponUpsertWithWhereUniqueWithoutPurchaseInput {

    @Field(() => CouponWhereUniqueInput, {nullable:false})
    where!: CouponWhereUniqueInput;

    @Field(() => CouponUpdateWithoutPurchaseInput, {nullable:false})
    update!: CouponUpdateWithoutPurchaseInput;

    @Field(() => CouponCreateWithoutPurchaseInput, {nullable:false})
    create!: CouponCreateWithoutPurchaseInput;
}
