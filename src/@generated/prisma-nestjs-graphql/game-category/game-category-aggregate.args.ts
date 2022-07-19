import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCategoryWhereInput } from './game-category-where.input';
import { GameCategoryOrderByWithRelationAndSearchRelevanceInput } from './game-category-order-by-with-relation-and-search-relevance.input';
import { GameCategoryWhereUniqueInput } from './game-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameCategoryCountAggregateInput } from './game-category-count-aggregate.input';
import { GameCategoryAvgAggregateInput } from './game-category-avg-aggregate.input';
import { GameCategorySumAggregateInput } from './game-category-sum-aggregate.input';
import { GameCategoryMinAggregateInput } from './game-category-min-aggregate.input';
import { GameCategoryMaxAggregateInput } from './game-category-max-aggregate.input';

@ArgsType()
export class GameCategoryAggregateArgs {

    @Field(() => GameCategoryWhereInput, {nullable:true})
    where?: GameCategoryWhereInput;

    @Field(() => [GameCategoryOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<GameCategoryOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => GameCategoryWhereUniqueInput, {nullable:true})
    cursor?: GameCategoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GameCategoryCountAggregateInput, {nullable:true})
    _count?: GameCategoryCountAggregateInput;

    @Field(() => GameCategoryAvgAggregateInput, {nullable:true})
    _avg?: GameCategoryAvgAggregateInput;

    @Field(() => GameCategorySumAggregateInput, {nullable:true})
    _sum?: GameCategorySumAggregateInput;

    @Field(() => GameCategoryMinAggregateInput, {nullable:true})
    _min?: GameCategoryMinAggregateInput;

    @Field(() => GameCategoryMaxAggregateInput, {nullable:true})
    _max?: GameCategoryMaxAggregateInput;
}
