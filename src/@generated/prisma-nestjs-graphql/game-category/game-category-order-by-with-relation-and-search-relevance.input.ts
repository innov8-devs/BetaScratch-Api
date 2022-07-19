import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameCategoryOrderByRelevanceInput } from './game-category-order-by-relevance.input';

@InputType()
export class GameCategoryOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryName?: keyof typeof SortOrder;

    @Field(() => GameCategoryOrderByRelevanceInput, {nullable:true})
    _relevance?: GameCategoryOrderByRelevanceInput;
}
