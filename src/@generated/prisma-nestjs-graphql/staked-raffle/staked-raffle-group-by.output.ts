import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';
import { StakedRaffleCountAggregate } from './staked-raffle-count-aggregate.output';
import { StakedRaffleAvgAggregate } from './staked-raffle-avg-aggregate.output';
import { StakedRaffleSumAggregate } from './staked-raffle-sum-aggregate.output';
import { StakedRaffleMinAggregate } from './staked-raffle-min-aggregate.output';
import { StakedRaffleMaxAggregate } from './staked-raffle-max-aggregate.output';

@ObjectType()
export class StakedRaffleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => RAFFLE_TYPE, {nullable:false})
    type!: keyof typeof RAFFLE_TYPE;

    @Field(() => [Int], {nullable:true})
    numbers?: Array<number>;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
