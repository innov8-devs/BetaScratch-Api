import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseOrderByRelevanceFieldEnum } from './purchase-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PurchaseOrderByRelevanceInput {

    @Field(() => [PurchaseOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof PurchaseOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
