import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WalletCountOrderByAggregateInput } from './wallet-count-order-by-aggregate.input';
import { WalletAvgOrderByAggregateInput } from './wallet-avg-order-by-aggregate.input';
import { WalletMaxOrderByAggregateInput } from './wallet-max-order-by-aggregate.input';
import { WalletMinOrderByAggregateInput } from './wallet-min-order-by-aggregate.input';
import { WalletSumOrderByAggregateInput } from './wallet-sum-order-by-aggregate.input';

@InputType()
export class WalletOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    withdrawable?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bonus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => WalletCountOrderByAggregateInput, {nullable:true})
    _count?: WalletCountOrderByAggregateInput;

    @Field(() => WalletAvgOrderByAggregateInput, {nullable:true})
    _avg?: WalletAvgOrderByAggregateInput;

    @Field(() => WalletMaxOrderByAggregateInput, {nullable:true})
    _max?: WalletMaxOrderByAggregateInput;

    @Field(() => WalletMinOrderByAggregateInput, {nullable:true})
    _min?: WalletMinOrderByAggregateInput;

    @Field(() => WalletSumOrderByAggregateInput, {nullable:true})
    _sum?: WalletSumOrderByAggregateInput;
}
