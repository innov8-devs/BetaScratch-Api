import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CouponWhereInput } from './coupon-where.input';

@InputType()
export class CouponListRelationFilter {

    @Field(() => CouponWhereInput, {nullable:true})
    every?: CouponWhereInput;

    @Field(() => CouponWhereInput, {nullable:true})
    some?: CouponWhereInput;

    @Field(() => CouponWhereInput, {nullable:true})
    none?: CouponWhereInput;
}
