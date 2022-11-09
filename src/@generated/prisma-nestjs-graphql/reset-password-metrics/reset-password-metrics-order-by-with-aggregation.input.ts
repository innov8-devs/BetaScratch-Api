import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ResetPasswordMetricsCountOrderByAggregateInput } from './reset-password-metrics-count-order-by-aggregate.input';
import { ResetPasswordMetricsAvgOrderByAggregateInput } from './reset-password-metrics-avg-order-by-aggregate.input';
import { ResetPasswordMetricsMaxOrderByAggregateInput } from './reset-password-metrics-max-order-by-aggregate.input';
import { ResetPasswordMetricsMinOrderByAggregateInput } from './reset-password-metrics-min-order-by-aggregate.input';
import { ResetPasswordMetricsSumOrderByAggregateInput } from './reset-password-metrics-sum-order-by-aggregate.input';

@InputType()
export class ResetPasswordMetricsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ResetPasswordMetricsCountOrderByAggregateInput, {nullable:true})
    _count?: ResetPasswordMetricsCountOrderByAggregateInput;

    @Field(() => ResetPasswordMetricsAvgOrderByAggregateInput, {nullable:true})
    _avg?: ResetPasswordMetricsAvgOrderByAggregateInput;

    @Field(() => ResetPasswordMetricsMaxOrderByAggregateInput, {nullable:true})
    _max?: ResetPasswordMetricsMaxOrderByAggregateInput;

    @Field(() => ResetPasswordMetricsMinOrderByAggregateInput, {nullable:true})
    _min?: ResetPasswordMetricsMinOrderByAggregateInput;

    @Field(() => ResetPasswordMetricsSumOrderByAggregateInput, {nullable:true})
    _sum?: ResetPasswordMetricsSumOrderByAggregateInput;
}
