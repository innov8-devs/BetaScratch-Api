import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { WithdrawalRequestCountAggregate } from './withdrawal-request-count-aggregate.output';
import { WithdrawalRequestAvgAggregate } from './withdrawal-request-avg-aggregate.output';
import { WithdrawalRequestSumAggregate } from './withdrawal-request-sum-aggregate.output';
import { WithdrawalRequestMinAggregate } from './withdrawal-request-min-aggregate.output';
import { WithdrawalRequestMaxAggregate } from './withdrawal-request-max-aggregate.output';

@ObjectType()
export class WithdrawalRequestGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    bank?: string;

    @Field(() => String, {nullable:true})
    accountNumber?: string;

    @Field(() => String, {nullable:true})
    accountName?: string;

    @Field(() => String, {nullable:false})
    amount!: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    paypal?: string;

    @Field(() => String, {nullable:true})
    btcWalletAdderess?: string;

    @Field(() => String, {nullable:true})
    licenseNumber?: string;

    @Field(() => String, {nullable:true})
    licenseType?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => WithdrawalRequestCountAggregate, {nullable:true})
    _count?: WithdrawalRequestCountAggregate;

    @Field(() => WithdrawalRequestAvgAggregate, {nullable:true})
    _avg?: WithdrawalRequestAvgAggregate;

    @Field(() => WithdrawalRequestSumAggregate, {nullable:true})
    _sum?: WithdrawalRequestSumAggregate;

    @Field(() => WithdrawalRequestMinAggregate, {nullable:true})
    _min?: WithdrawalRequestMinAggregate;

    @Field(() => WithdrawalRequestMaxAggregate, {nullable:true})
    _max?: WithdrawalRequestMaxAggregate;
}
