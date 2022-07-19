import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameOrderByRelevanceFieldEnum } from './game-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GameOrderByRelevanceInput {

    @Field(() => [GameOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof GameOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
