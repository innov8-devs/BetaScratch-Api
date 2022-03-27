import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenWhereInput } from './token-where.input';
import { TokenOrderByWithAggregationInput } from './token-order-by-with-aggregation.input';
import { TokenScalarFieldEnum } from './token-scalar-field.enum';
import { TokenScalarWhereWithAggregatesInput } from './token-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TokenCountAggregateInput } from './token-count-aggregate.input';
import { TokenAvgAggregateInput } from './token-avg-aggregate.input';
import { TokenSumAggregateInput } from './token-sum-aggregate.input';
import { TokenMinAggregateInput } from './token-min-aggregate.input';
import { TokenMaxAggregateInput } from './token-max-aggregate.input';

@ArgsType()
export class TokenGroupByArgs {

    @Field(() => TokenWhereInput, {nullable:true})
    where?: TokenWhereInput;

    @Field(() => [TokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TokenOrderByWithAggregationInput>;

    @Field(() => [TokenScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TokenScalarFieldEnum>;

    @Field(() => TokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: TokenScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TokenCountAggregateInput, {nullable:true})
    _count?: TokenCountAggregateInput;

    @Field(() => TokenAvgAggregateInput, {nullable:true})
    _avg?: TokenAvgAggregateInput;

    @Field(() => TokenSumAggregateInput, {nullable:true})
    _sum?: TokenSumAggregateInput;

    @Field(() => TokenMinAggregateInput, {nullable:true})
    _min?: TokenMinAggregateInput;

    @Field(() => TokenMaxAggregateInput, {nullable:true})
    _max?: TokenMaxAggregateInput;
}
