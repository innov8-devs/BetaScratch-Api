import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameCategoryCountOrderByAggregateInput } from './game-category-count-order-by-aggregate.input';
import { GameCategoryAvgOrderByAggregateInput } from './game-category-avg-order-by-aggregate.input';
import { GameCategoryMaxOrderByAggregateInput } from './game-category-max-order-by-aggregate.input';
import { GameCategoryMinOrderByAggregateInput } from './game-category-min-order-by-aggregate.input';
import { GameCategorySumOrderByAggregateInput } from './game-category-sum-order-by-aggregate.input';

@InputType()
export class GameCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryName?: keyof typeof SortOrder;

    @Field(() => GameCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: GameCategoryCountOrderByAggregateInput;

    @Field(() => GameCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: GameCategoryAvgOrderByAggregateInput;

    @Field(() => GameCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: GameCategoryMaxOrderByAggregateInput;

    @Field(() => GameCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: GameCategoryMinOrderByAggregateInput;

    @Field(() => GameCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: GameCategorySumOrderByAggregateInput;
}
