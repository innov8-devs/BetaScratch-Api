import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CartCountOrderByAggregateInput } from './cart-count-order-by-aggregate.input';
import { CartAvgOrderByAggregateInput } from './cart-avg-order-by-aggregate.input';
import { CartMaxOrderByAggregateInput } from './cart-max-order-by-aggregate.input';
import { CartMinOrderByAggregateInput } from './cart-min-order-by-aggregate.input';
import { CartSumOrderByAggregateInput } from './cart-sum-order-by-aggregate.input';

@InputType()
export class CartOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CartCountOrderByAggregateInput, {nullable:true})
    _count?: CartCountOrderByAggregateInput;

    @Field(() => CartAvgOrderByAggregateInput, {nullable:true})
    _avg?: CartAvgOrderByAggregateInput;

    @Field(() => CartMaxOrderByAggregateInput, {nullable:true})
    _max?: CartMaxOrderByAggregateInput;

    @Field(() => CartMinOrderByAggregateInput, {nullable:true})
    _min?: CartMinOrderByAggregateInput;

    @Field(() => CartSumOrderByAggregateInput, {nullable:true})
    _sum?: CartSumOrderByAggregateInput;
}
