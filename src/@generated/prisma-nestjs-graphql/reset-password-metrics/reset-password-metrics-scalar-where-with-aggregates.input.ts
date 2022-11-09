import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ResetPasswordMetricsScalarWhereWithAggregatesInput {

    @Field(() => [ResetPasswordMetricsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ResetPasswordMetricsScalarWhereWithAggregatesInput>;

    @Field(() => [ResetPasswordMetricsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ResetPasswordMetricsScalarWhereWithAggregatesInput>;

    @Field(() => [ResetPasswordMetricsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ResetPasswordMetricsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
