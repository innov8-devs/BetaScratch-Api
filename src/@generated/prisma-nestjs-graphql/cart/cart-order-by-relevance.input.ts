import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartOrderByRelevanceFieldEnum } from './cart-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CartOrderByRelevanceInput {

    @Field(() => [CartOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof CartOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
