import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FlutterwaveLogCountOrderByAggregateInput } from './flutterwave-log-count-order-by-aggregate.input';
import { FlutterwaveLogAvgOrderByAggregateInput } from './flutterwave-log-avg-order-by-aggregate.input';
import { FlutterwaveLogMaxOrderByAggregateInput } from './flutterwave-log-max-order-by-aggregate.input';
import { FlutterwaveLogMinOrderByAggregateInput } from './flutterwave-log-min-order-by-aggregate.input';
import { FlutterwaveLogSumOrderByAggregateInput } from './flutterwave-log-sum-order-by-aggregate.input';

@InputType()
export class FlutterwaveLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tx_ref?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerEmail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    narration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    processorResponse?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    card?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FlutterwaveLogCountOrderByAggregateInput, {nullable:true})
    _count?: FlutterwaveLogCountOrderByAggregateInput;

    @Field(() => FlutterwaveLogAvgOrderByAggregateInput, {nullable:true})
    _avg?: FlutterwaveLogAvgOrderByAggregateInput;

    @Field(() => FlutterwaveLogMaxOrderByAggregateInput, {nullable:true})
    _max?: FlutterwaveLogMaxOrderByAggregateInput;

    @Field(() => FlutterwaveLogMinOrderByAggregateInput, {nullable:true})
    _min?: FlutterwaveLogMinOrderByAggregateInput;

    @Field(() => FlutterwaveLogSumOrderByAggregateInput, {nullable:true})
    _sum?: FlutterwaveLogSumOrderByAggregateInput;
}
