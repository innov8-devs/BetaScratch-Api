import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StakedRaffleTicketsCountAggregate } from './staked-raffle-tickets-count-aggregate.output';
import { StakedRaffleTicketsAvgAggregate } from './staked-raffle-tickets-avg-aggregate.output';
import { StakedRaffleTicketsSumAggregate } from './staked-raffle-tickets-sum-aggregate.output';
import { StakedRaffleTicketsMinAggregate } from './staked-raffle-tickets-min-aggregate.output';
import { StakedRaffleTicketsMaxAggregate } from './staked-raffle-tickets-max-aggregate.output';

@ObjectType()
export class AggregateStakedRaffleTickets {

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
