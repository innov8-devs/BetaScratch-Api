import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CouponCountAggregate } from './coupon-count-aggregate.output';
import { CouponAvgAggregate } from './coupon-avg-aggregate.output';
import { CouponSumAggregate } from './coupon-sum-aggregate.output';
import { CouponMinAggregate } from './coupon-min-aggregate.output';
import { CouponMaxAggregate } from './coupon-max-aggregate.output';

@ObjectType()
export class AggregateCoupon {

    @Field(() => CouponCountAggregate, {nullable:true})
    _count?: CouponCountAggregate;

    @Field(() => CouponAvgAggregate, {nullable:true})
    _avg?: CouponAvgAggregate;

    @Field(() => CouponSumAggregate, {nullable:true})
    _sum?: CouponSumAggregate;

    @Field(() => CouponMinAggregate, {nullable:true})
    _min?: CouponMinAggregate;

    @Field(() => CouponMaxAggregate, {nullable:true})
    _max?: CouponMaxAggregate;
}
