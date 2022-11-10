import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { COUPON_QUANTITY } from '../prisma/coupon-quantity.enum';
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

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Boolean, {nullable:false})
    capped!: boolean;

    @Field(() => Int, {nullable:false})
    cappedAmount!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Int, {nullable:false})
    expires!: number;

    @Field(() => COUPON_QUANTITY, {nullable:false})
    quantity!: keyof typeof COUPON_QUANTITY;

    @Field(() => Int, {nullable:false})
    quantityCount!: number;

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
