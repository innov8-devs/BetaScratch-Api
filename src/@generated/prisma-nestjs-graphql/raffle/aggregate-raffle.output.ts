import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RaffleCountAggregate } from './raffle-count-aggregate.output';
import { RaffleAvgAggregate } from './raffle-avg-aggregate.output';
import { RaffleSumAggregate } from './raffle-sum-aggregate.output';
import { RaffleMinAggregate } from './raffle-min-aggregate.output';
import { RaffleMaxAggregate } from './raffle-max-aggregate.output';

@ObjectType()
export class AggregateRaffle {

    @Field(() => RaffleCountAggregate, {nullable:true})
    _count?: RaffleCountAggregate;

    @Field(() => RaffleAvgAggregate, {nullable:true})
    _avg?: RaffleAvgAggregate;

    @Field(() => RaffleSumAggregate, {nullable:true})
    _sum?: RaffleSumAggregate;

    @Field(() => RaffleMinAggregate, {nullable:true})
    _min?: RaffleMinAggregate;

    @Field(() => RaffleMaxAggregate, {nullable:true})
    _max?: RaffleMaxAggregate;
}
