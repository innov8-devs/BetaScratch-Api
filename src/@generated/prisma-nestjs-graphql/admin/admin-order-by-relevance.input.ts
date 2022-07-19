import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminOrderByRelevanceFieldEnum } from './admin-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AdminOrderByRelevanceInput {

    @Field(() => [AdminOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof AdminOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
