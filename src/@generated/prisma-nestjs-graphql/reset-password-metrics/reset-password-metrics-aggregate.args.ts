import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordMetricsWhereInput } from './reset-password-metrics-where.input';
import { ResetPasswordMetricsOrderByWithRelationAndSearchRelevanceInput } from './reset-password-metrics-order-by-with-relation-and-search-relevance.input';
import { ResetPasswordMetricsWhereUniqueInput } from './reset-password-metrics-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ResetPasswordMetricsCountAggregateInput } from './reset-password-metrics-count-aggregate.input';
import { ResetPasswordMetricsAvgAggregateInput } from './reset-password-metrics-avg-aggregate.input';
import { ResetPasswordMetricsSumAggregateInput } from './reset-password-metrics-sum-aggregate.input';
import { ResetPasswordMetricsMinAggregateInput } from './reset-password-metrics-min-aggregate.input';
import { ResetPasswordMetricsMaxAggregateInput } from './reset-password-metrics-max-aggregate.input';

@ArgsType()
export class ResetPasswordMetricsAggregateArgs {

    @Field(() => ResetPasswordMetricsWhereInput, {nullable:true})
    where?: ResetPasswordMetricsWhereInput;

    @Field(() => [ResetPasswordMetricsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ResetPasswordMetricsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ResetPasswordMetricsWhereUniqueInput, {nullable:true})
    cursor?: ResetPasswordMetricsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ResetPasswordMetricsCountAggregateInput, {nullable:true})
    _count?: ResetPasswordMetricsCountAggregateInput;

    @Field(() => ResetPasswordMetricsAvgAggregateInput, {nullable:true})
    _avg?: ResetPasswordMetricsAvgAggregateInput;

    @Field(() => ResetPasswordMetricsSumAggregateInput, {nullable:true})
    _sum?: ResetPasswordMetricsSumAggregateInput;

    @Field(() => ResetPasswordMetricsMinAggregateInput, {nullable:true})
    _min?: ResetPasswordMetricsMinAggregateInput;

    @Field(() => ResetPasswordMetricsMaxAggregateInput, {nullable:true})
    _max?: ResetPasswordMetricsMaxAggregateInput;
}
