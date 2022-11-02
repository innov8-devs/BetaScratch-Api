import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponWhereInput } from './coupon-where.input';
import { CouponOrderByWithRelationAndSearchRelevanceInput } from './coupon-order-by-with-relation-and-search-relevance.input';
import { CouponWhereUniqueInput } from './coupon-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CouponScalarFieldEnum } from './coupon-scalar-field.enum';

@ArgsType()
export class FindFirstCouponArgs {

    @Field(() => CouponWhereInput, {nullable:true})
    where?: CouponWhereInput;

    @Field(() => [CouponOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<CouponOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => CouponWhereUniqueInput, {nullable:true})
    cursor?: CouponWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CouponScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CouponScalarFieldEnum>;
}
