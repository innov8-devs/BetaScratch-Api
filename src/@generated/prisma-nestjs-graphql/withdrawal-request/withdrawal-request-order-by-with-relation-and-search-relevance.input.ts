import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { WithdrawalRequestOrderByRelevanceInput } from './withdrawal-request-order-by-relevance.input';

@InputType()
export class WithdrawalRequestOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    user?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bank?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paypal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    btcWalletAdderess?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    licenseNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    licenseType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => WithdrawalRequestOrderByRelevanceInput, {nullable:true})
    _relevance?: WithdrawalRequestOrderByRelevanceInput;
}
