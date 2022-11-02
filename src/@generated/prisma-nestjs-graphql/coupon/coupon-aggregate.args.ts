import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponWhereInput } from './coupon-where.input';
import { CouponOrderByWithRelationAndSearchRelevanceInput } from './coupon-order-by-with-relation-and-search-relevance.input';
import { CouponWhereUniqueInput } from './coupon-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CouponCountAggregateInput } from './coupon-count-aggregate.input';
import { CouponAvgAggregateInput } from './coupon-avg-aggregate.input';
import { CouponSumAggregateInput } from './coupon-sum-aggregate.input';
import { CouponMinAggregateInput } from './coupon-min-aggregate.input';
import { CouponMaxAggregateInput } from './coupon-max-aggregate.input';

@ArgsType()
export class CouponAggregateArgs {

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

    @Field(() => CouponCountAggregateInput, {nullable:true})
    _count?: CouponCountAggregateInput;

    @Field(() => CouponAvgAggregateInput, {nullable:true})
    _avg?: CouponAvgAggregateInput;

    @Field(() => CouponSumAggregateInput, {nullable:true})
    _sum?: CouponSumAggregateInput;

    @Field(() => CouponMinAggregateInput, {nullable:true})
    _min?: CouponMinAggregateInput;

    @Field(() => CouponMaxAggregateInput, {nullable:true})
    _max?: CouponMaxAggregateInput;
}
