import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalRequestWhereInput } from './withdrawal-request-where.input';
import { WithdrawalRequestOrderByWithAggregationInput } from './withdrawal-request-order-by-with-aggregation.input';
import { WithdrawalRequestScalarFieldEnum } from './withdrawal-request-scalar-field.enum';
import { WithdrawalRequestScalarWhereWithAggregatesInput } from './withdrawal-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { WithdrawalRequestCountAggregateInput } from './withdrawal-request-count-aggregate.input';
import { WithdrawalRequestAvgAggregateInput } from './withdrawal-request-avg-aggregate.input';
import { WithdrawalRequestSumAggregateInput } from './withdrawal-request-sum-aggregate.input';
import { WithdrawalRequestMinAggregateInput } from './withdrawal-request-min-aggregate.input';
import { WithdrawalRequestMaxAggregateInput } from './withdrawal-request-max-aggregate.input';

@ArgsType()
export class WithdrawalRequestGroupByArgs {

    @Field(() => WithdrawalRequestWhereInput, {nullable:true})
    where?: WithdrawalRequestWhereInput;

    @Field(() => [WithdrawalRequestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<WithdrawalRequestOrderByWithAggregationInput>;

    @Field(() => [WithdrawalRequestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof WithdrawalRequestScalarFieldEnum>;

    @Field(() => WithdrawalRequestScalarWhereWithAggregatesInput, {nullable:true})
    having?: WithdrawalRequestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WithdrawalRequestCountAggregateInput, {nullable:true})
    _count?: WithdrawalRequestCountAggregateInput;

    @Field(() => WithdrawalRequestAvgAggregateInput, {nullable:true})
    _avg?: WithdrawalRequestAvgAggregateInput;

    @Field(() => WithdrawalRequestSumAggregateInput, {nullable:true})
    _sum?: WithdrawalRequestSumAggregateInput;

    @Field(() => WithdrawalRequestMinAggregateInput, {nullable:true})
    _min?: WithdrawalRequestMinAggregateInput;

    @Field(() => WithdrawalRequestMaxAggregateInput, {nullable:true})
    _max?: WithdrawalRequestMaxAggregateInput;
}
