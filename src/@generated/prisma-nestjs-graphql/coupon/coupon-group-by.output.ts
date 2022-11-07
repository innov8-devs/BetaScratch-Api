import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CouponCountAggregate } from './coupon-count-aggregate.output';
import { CouponAvgAggregate } from './coupon-avg-aggregate.output';
import { CouponSumAggregate } from './coupon-sum-aggregate.output';
import { CouponMinAggregate } from './coupon-min-aggregate.output';
import { CouponMaxAggregate } from './coupon-max-aggregate.output';

@ObjectType()
export class CouponGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    percentage!: number;

    @Field(() => Boolean, {nullable:false})
    status!: boolean;

    @Field(() => Boolean, {nullable:false})
    cap!: boolean;

    @Field(() => Int, {nullable:false})
    capAmount!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Boolean, {nullable:false})
    validity!: boolean;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
