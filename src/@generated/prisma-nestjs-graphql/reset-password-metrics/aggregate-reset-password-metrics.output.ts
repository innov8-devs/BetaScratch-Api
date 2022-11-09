import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ResetPasswordMetricsCountAggregate } from './reset-password-metrics-count-aggregate.output';
import { ResetPasswordMetricsAvgAggregate } from './reset-password-metrics-avg-aggregate.output';
import { ResetPasswordMetricsSumAggregate } from './reset-password-metrics-sum-aggregate.output';
import { ResetPasswordMetricsMinAggregate } from './reset-password-metrics-min-aggregate.output';
import { ResetPasswordMetricsMaxAggregate } from './reset-password-metrics-max-aggregate.output';

@ObjectType()
export class AggregateResetPasswordMetrics {

    @Field(() => ResetPasswordMetricsCountAggregate, {nullable:true})
    _count?: ResetPasswordMetricsCountAggregate;

    @Field(() => ResetPasswordMetricsAvgAggregate, {nullable:true})
    _avg?: ResetPasswordMetricsAvgAggregate;

    @Field(() => ResetPasswordMetricsSumAggregate, {nullable:true})
    _sum?: ResetPasswordMetricsSumAggregate;

    @Field(() => ResetPasswordMetricsMinAggregate, {nullable:true})
    _min?: ResetPasswordMetricsMinAggregate;

    @Field(() => ResetPasswordMetricsMaxAggregate, {nullable:true})
    _max?: ResetPasswordMetricsMaxAggregate;
}
