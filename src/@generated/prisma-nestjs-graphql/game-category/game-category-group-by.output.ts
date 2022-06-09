import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GameCategoryCountAggregate } from './game-category-count-aggregate.output';
import { GameCategoryAvgAggregate } from './game-category-avg-aggregate.output';
import { GameCategorySumAggregate } from './game-category-sum-aggregate.output';
import { GameCategoryMinAggregate } from './game-category-min-aggregate.output';
import { GameCategoryMaxAggregate } from './game-category-max-aggregate.output';

@ObjectType()
export class GameCategoryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    categoryName!: string;

    @Field(() => GameCategoryCountAggregate, {nullable:true})
    _count?: GameCategoryCountAggregate;

    @Field(() => GameCategoryAvgAggregate, {nullable:true})
    _avg?: GameCategoryAvgAggregate;

    @Field(() => GameCategorySumAggregate, {nullable:true})
    _sum?: GameCategorySumAggregate;

    @Field(() => GameCategoryMinAggregate, {nullable:true})
    _min?: GameCategoryMinAggregate;

    @Field(() => GameCategoryMaxAggregate, {nullable:true})
    _max?: GameCategoryMaxAggregate;
}
