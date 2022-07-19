import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionOrderByRelevanceFieldEnum } from './transaction-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TransactionOrderByRelevanceInput {

    @Field(() => [TransactionOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof TransactionOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
