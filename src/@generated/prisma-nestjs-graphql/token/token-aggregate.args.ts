import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenWhereInput } from './token-where.input';
import { TokenOrderByWithRelationInput } from './token-order-by-with-relation.input';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TokenCountAggregateInput } from './token-count-aggregate.input';
import { TokenAvgAggregateInput } from './token-avg-aggregate.input';
import { TokenSumAggregateInput } from './token-sum-aggregate.input';
import { TokenMinAggregateInput } from './token-min-aggregate.input';
import { TokenMaxAggregateInput } from './token-max-aggregate.input';

@ArgsType()
export class TokenAggregateArgs {

    @Field(() => TokenWhereInput, {nullable:true})
    where?: TokenWhereInput;

    @Field(() => [TokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TokenOrderByWithRelationInput>;

    @Field(() => TokenWhereUniqueInput, {nullable:true})
    cursor?: TokenWhereUniqueInput;

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
