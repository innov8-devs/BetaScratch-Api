import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StakedRaffleCountAggregate } from './staked-raffle-count-aggregate.output';
import { StakedRaffleAvgAggregate } from './staked-raffle-avg-aggregate.output';
import { StakedRaffleSumAggregate } from './staked-raffle-sum-aggregate.output';
import { StakedRaffleMinAggregate } from './staked-raffle-min-aggregate.output';
import { StakedRaffleMaxAggregate } from './staked-raffle-max-aggregate.output';

@ObjectType()
export class AggregateStakedRaffle {

    @Field(() => StakedRaffleCountAggregate, {nullable:true})
    _count?: StakedRaffleCountAggregate;

    @Field(() => StakedRaffleAvgAggregate, {nullable:true})
    _avg?: StakedRaffleAvgAggregate;

    @Field(() => StakedRaffleSumAggregate, {nullable:true})
    _sum?: StakedRaffleSumAggregate;

    @Field(() => StakedRaffleMinAggregate, {nullable:true})
    _min?: StakedRaffleMinAggregate;

    @Field(() => StakedRaffleMaxAggregate, {nullable:true})
    _max?: StakedRaffleMaxAggregate;
}
