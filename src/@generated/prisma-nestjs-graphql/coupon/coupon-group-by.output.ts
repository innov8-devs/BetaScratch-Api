import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { COUPON_TYPE } from '../prisma/coupon-type.enum';
import { CouponCountAggregate } from './coupon-count-aggregate.output';
import { CouponAvgAggregate } from './coupon-avg-aggregate.output';
import { CouponSumAggregate } from './coupon-sum-aggregate.output';
import { CouponMinAggregate } from './coupon-min-aggregate.output';
import { CouponMaxAggregate } from './coupon-max-aggregate.output';

@ObjectType()
export class CouponGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Boolean, {nullable:false})
    validity!: boolean;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => COUPON_TYPE, {nullable:false})
    type!: keyof typeof COUPON_TYPE;

    @Field(() => Int, {nullable:true})
    percentage?: number;

    @Field(() => Int, {nullable:true})
    amount?: number;

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
