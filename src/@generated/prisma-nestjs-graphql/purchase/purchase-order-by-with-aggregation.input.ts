import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PurchaseCountOrderByAggregateInput } from './purchase-count-order-by-aggregate.input';
import { PurchaseAvgOrderByAggregateInput } from './purchase-avg-order-by-aggregate.input';
import { PurchaseMaxOrderByAggregateInput } from './purchase-max-order-by-aggregate.input';
import { PurchaseMinOrderByAggregateInput } from './purchase-min-order-by-aggregate.input';
import { PurchaseSumOrderByAggregateInput } from './purchase-sum-order-by-aggregate.input';

@InputType()
export class PurchaseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reference?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PurchaseCountOrderByAggregateInput, {nullable:true})
    _count?: PurchaseCountOrderByAggregateInput;

    @Field(() => PurchaseAvgOrderByAggregateInput, {nullable:true})
    _avg?: PurchaseAvgOrderByAggregateInput;

    @Field(() => PurchaseMaxOrderByAggregateInput, {nullable:true})
    _max?: PurchaseMaxOrderByAggregateInput;

    @Field(() => PurchaseMinOrderByAggregateInput, {nullable:true})
    _min?: PurchaseMinOrderByAggregateInput;

    @Field(() => PurchaseSumOrderByAggregateInput, {nullable:true})
    _sum?: PurchaseSumOrderByAggregateInput;
}
