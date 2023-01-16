import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';
import { TRANSACTION_TYPE } from '../prisma/transaction-type.enum';
import { StakedRaffleTicketsCountAggregate } from './staked-raffle-tickets-count-aggregate.output';
import { StakedRaffleTicketsAvgAggregate } from './staked-raffle-tickets-avg-aggregate.output';
import { StakedRaffleTicketsSumAggregate } from './staked-raffle-tickets-sum-aggregate.output';
import { StakedRaffleTicketsMinAggregate } from './staked-raffle-tickets-min-aggregate.output';
import { StakedRaffleTicketsMaxAggregate } from './staked-raffle-tickets-max-aggregate.output';

@ObjectType()
export class StakedRaffleTicketsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => RAFFLE_TYPE, {nullable:false})
    type!: keyof typeof RAFFLE_TYPE;

    @Field(() => String, {nullable:false})
    originalNumbers!: string;

    @Field(() => String, {nullable:false})
    sortedNumbers!: string;

    @Field(() => String, {nullable:true})
    reference?: string;

    @Field(() => TRANSACTION_TYPE, {nullable:false})
    transactionType!: keyof typeof TRANSACTION_TYPE;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Boolean, {nullable:false})
    isPaid!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => StakedRaffleTicketsCountAggregate, {nullable:true})
    _count?: StakedRaffleTicketsCountAggregate;

    @Field(() => StakedRaffleTicketsAvgAggregate, {nullable:true})
    _avg?: StakedRaffleTicketsAvgAggregate;

    @Field(() => StakedRaffleTicketsSumAggregate, {nullable:true})
    _sum?: StakedRaffleTicketsSumAggregate;

    @Field(() => StakedRaffleTicketsMinAggregate, {nullable:true})
    _min?: StakedRaffleTicketsMinAggregate;

    @Field(() => StakedRaffleTicketsMaxAggregate, {nullable:true})
    _max?: StakedRaffleTicketsMaxAggregate;
}
