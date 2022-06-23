import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WithdrawalRequestCountOrderByAggregateInput } from './withdrawal-request-count-order-by-aggregate.input';
import { WithdrawalRequestAvgOrderByAggregateInput } from './withdrawal-request-avg-order-by-aggregate.input';
import { WithdrawalRequestMaxOrderByAggregateInput } from './withdrawal-request-max-order-by-aggregate.input';
import { WithdrawalRequestMinOrderByAggregateInput } from './withdrawal-request-min-order-by-aggregate.input';
import { WithdrawalRequestSumOrderByAggregateInput } from './withdrawal-request-sum-order-by-aggregate.input';

@InputType()
export class WithdrawalRequestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

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

    @Field(() => WithdrawalRequestCountOrderByAggregateInput, {nullable:true})
    _count?: WithdrawalRequestCountOrderByAggregateInput;

    @Field(() => WithdrawalRequestAvgOrderByAggregateInput, {nullable:true})
    _avg?: WithdrawalRequestAvgOrderByAggregateInput;

    @Field(() => WithdrawalRequestMaxOrderByAggregateInput, {nullable:true})
    _max?: WithdrawalRequestMaxOrderByAggregateInput;

    @Field(() => WithdrawalRequestMinOrderByAggregateInput, {nullable:true})
    _min?: WithdrawalRequestMinOrderByAggregateInput;

    @Field(() => WithdrawalRequestSumOrderByAggregateInput, {nullable:true})
    _sum?: WithdrawalRequestSumOrderByAggregateInput;
}
