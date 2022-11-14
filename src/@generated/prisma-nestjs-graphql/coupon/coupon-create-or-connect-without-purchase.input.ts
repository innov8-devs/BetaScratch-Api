import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CouponWhereUniqueInput } from './coupon-where-unique.input';
import { CouponCreateWithoutPurchaseInput } from './coupon-create-without-purchase.input';

@InputType()
export class CouponCreateOrConnectWithoutPurchaseInput {

    @Field(() => CouponWhereUniqueInput, {nullable:false})
    where!: CouponWhereUniqueInput;

    @Field(() => CouponCreateWithoutPurchaseInput, {nullable:false})
    create!: CouponCreateWithoutPurchaseInput;
}
