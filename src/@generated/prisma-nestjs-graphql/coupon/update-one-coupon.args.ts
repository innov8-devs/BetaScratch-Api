import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponUpdateInput } from './coupon-update.input';
import { CouponWhereUniqueInput } from './coupon-where-unique.input';

@ArgsType()
export class UpdateOneCouponArgs {

    @Field(() => CouponUpdateInput, {nullable:false})
    data!: CouponUpdateInput;

    @Field(() => CouponWhereUniqueInput, {nullable:false})
    where!: CouponWhereUniqueInput;
}
