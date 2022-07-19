import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenOrderByRelevanceFieldEnum } from './token-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TokenOrderByRelevanceInput {

    @Field(() => [TokenOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof TokenOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
