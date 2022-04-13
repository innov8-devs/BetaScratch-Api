import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WithdrawalRequestCountAggregate } from './withdrawal-request-count-aggregate.output';
import { WithdrawalRequestAvgAggregate } from './withdrawal-request-avg-aggregate.output';
import { WithdrawalRequestSumAggregate } from './withdrawal-request-sum-aggregate.output';
import { WithdrawalRequestMinAggregate } from './withdrawal-request-min-aggregate.output';
import { WithdrawalRequestMaxAggregate } from './withdrawal-request-max-aggregate.output';

@ObjectType()
export class AggregateWithdrawalRequest {

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
