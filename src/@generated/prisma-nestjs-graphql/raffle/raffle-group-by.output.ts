import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';
import { RaffleCountAggregate } from './raffle-count-aggregate.output';
import { RaffleAvgAggregate } from './raffle-avg-aggregate.output';
import { RaffleSumAggregate } from './raffle-sum-aggregate.output';
import { RaffleMinAggregate } from './raffle-min-aggregate.output';
import { RaffleMaxAggregate } from './raffle-max-aggregate.output';

@ObjectType()
export class RaffleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => RAFFLE_TYPE, {nullable:false})
    type!: keyof typeof RAFFLE_TYPE;

    @Field(() => Int, {nullable:false})
    win!: number;

    @Field(() => Int, {nullable:false})
    stake!: number;

    @Field(() => Date, {nullable:false})
    expiry!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
