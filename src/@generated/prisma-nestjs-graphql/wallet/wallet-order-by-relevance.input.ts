import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletOrderByRelevanceFieldEnum } from './wallet-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class WalletOrderByRelevanceInput {

    @Field(() => [WalletOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof WalletOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
