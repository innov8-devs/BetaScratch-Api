import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GameCountAggregate } from './game-count-aggregate.output';
import { GameAvgAggregate } from './game-avg-aggregate.output';
import { GameSumAggregate } from './game-sum-aggregate.output';
import { GameMinAggregate } from './game-min-aggregate.output';
import { GameMaxAggregate } from './game-max-aggregate.output';

@ObjectType()
export class GameGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    gameId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    price!: any;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Int, {nullable:false})
    availability!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
