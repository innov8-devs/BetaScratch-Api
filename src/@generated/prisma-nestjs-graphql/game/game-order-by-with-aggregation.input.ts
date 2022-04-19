import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameCountOrderByAggregateInput } from './game-count-order-by-aggregate.input';
import { GameAvgOrderByAggregateInput } from './game-avg-order-by-aggregate.input';
import { GameMaxOrderByAggregateInput } from './game-max-order-by-aggregate.input';
import { GameMinOrderByAggregateInput } from './game-min-order-by-aggregate.input';
import { GameSumOrderByAggregateInput } from './game-sum-order-by-aggregate.input';

@InputType()
export class GameOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gameId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    availability?: keyof typeof SortOrder;

    @Field(() => GameCountOrderByAggregateInput, {nullable:true})
    _count?: GameCountOrderByAggregateInput;

    @Field(() => GameAvgOrderByAggregateInput, {nullable:true})
    _avg?: GameAvgOrderByAggregateInput;

    @Field(() => GameMaxOrderByAggregateInput, {nullable:true})
    _max?: GameMaxOrderByAggregateInput;

    @Field(() => GameMinOrderByAggregateInput, {nullable:true})
    _min?: GameMinOrderByAggregateInput;

    @Field(() => GameSumOrderByAggregateInput, {nullable:true})
    _sum?: GameSumOrderByAggregateInput;
}
