import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GameCountAggregate } from './game-count-aggregate.output';
import { GameAvgAggregate } from './game-avg-aggregate.output';
import { GameSumAggregate } from './game-sum-aggregate.output';
import { GameMinAggregate } from './game-min-aggregate.output';
import { GameMaxAggregate } from './game-max-aggregate.output';

@ObjectType()
export class AggregateGame {

    @Field(() => GameCountAggregate, {nullable:true})
    _count?: GameCountAggregate;

    @Field(() => GameAvgAggregate, {nullable:true})
    _avg?: GameAvgAggregate;

    @Field(() => GameSumAggregate, {nullable:true})
    _sum?: GameSumAggregate;

    @Field(() => GameMinAggregate, {nullable:true})
    _min?: GameMinAggregate;

    @Field(() => GameMaxAggregate, {nullable:true})
    _max?: GameMaxAggregate;
}
