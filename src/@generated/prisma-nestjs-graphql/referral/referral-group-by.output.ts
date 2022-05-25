import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReferralCountAggregate } from './referral-count-aggregate.output';
import { ReferralAvgAggregate } from './referral-avg-aggregate.output';
import { ReferralSumAggregate } from './referral-sum-aggregate.output';
import { ReferralMinAggregate } from './referral-min-aggregate.output';
import { ReferralMaxAggregate } from './referral-max-aggregate.output';

@ObjectType()
export class ReferralGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => [Int], {nullable:true})
    referrals?: Array<number>;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    invitesFunded!: number;

    @Field(() => Int, {nullable:false})
    totalEarned!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ReferralCountAggregate, {nullable:true})
    _count?: ReferralCountAggregate;

    @Field(() => ReferralAvgAggregate, {nullable:true})
    _avg?: ReferralAvgAggregate;

    @Field(() => ReferralSumAggregate, {nullable:true})
    _sum?: ReferralSumAggregate;

    @Field(() => ReferralMinAggregate, {nullable:true})
    _min?: ReferralMinAggregate;

    @Field(() => ReferralMaxAggregate, {nullable:true})
    _max?: ReferralMaxAggregate;
}
