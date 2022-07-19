import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCategoryOrderByRelevanceFieldEnum } from './game-category-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GameCategoryOrderByRelevanceInput {

    @Field(() => [GameCategoryOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof GameCategoryOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
