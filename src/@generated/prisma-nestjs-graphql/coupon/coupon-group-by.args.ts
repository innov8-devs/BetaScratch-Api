import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CouponWhereInput } from './coupon-where.input';
import { CouponOrderByWithAggregationInput } from './coupon-order-by-with-aggregation.input';
import { CouponScalarFieldEnum } from './coupon-scalar-field.enum';
import { CouponScalarWhereWithAggregatesInput } from './coupon-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CouponCountAggregateInput } from './coupon-count-aggregate.input';
import { CouponAvgAggregateInput } from './coupon-avg-aggregate.input';
import { CouponSumAggregateInput } from './coupon-sum-aggregate.input';
import { CouponMinAggregateInput } from './coupon-min-aggregate.input';
import { CouponMaxAggregateInput } from './coupon-max-aggregate.input';

@ArgsType()
export class CouponGroupByArgs {

    @Field(() => CouponWhereInput, {nullable:true})
    where?: CouponWhereInput;

    @Field(() => [CouponOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CouponOrderByWithAggregationInput>;

    @Field(() => [CouponScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CouponScalarFieldEnum>;

    @Field(() => CouponScalarWhereWithAggregatesInput, {nullable:true})
    having?: CouponScalarWhereWithAggregatesInput;

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
