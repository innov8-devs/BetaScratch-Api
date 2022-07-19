import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalRequestOrderByRelevanceFieldEnum } from './withdrawal-request-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class WithdrawalRequestOrderByRelevanceInput {

    @Field(() => [WithdrawalRequestOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof WithdrawalRequestOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
