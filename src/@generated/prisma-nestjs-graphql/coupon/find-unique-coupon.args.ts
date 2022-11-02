import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponWhereUniqueInput } from './coupon-where-unique.input';

@ArgsType()
export class FindUniqueCouponArgs {

    @Field(() => CouponWhereUniqueInput, {nullable:false})
    where!: CouponWhereUniqueInput;
}
