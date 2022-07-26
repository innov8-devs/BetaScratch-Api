import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlutterwaveLogWhereInput } from './flutterwave-log-where.input';
import { FlutterwaveLogOrderByWithRelationAndSearchRelevanceInput } from './flutterwave-log-order-by-with-relation-and-search-relevance.input';
import { FlutterwaveLogWhereUniqueInput } from './flutterwave-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FlutterwaveLogCountAggregateInput } from './flutterwave-log-count-aggregate.input';
import { FlutterwaveLogAvgAggregateInput } from './flutterwave-log-avg-aggregate.input';
import { FlutterwaveLogSumAggregateInput } from './flutterwave-log-sum-aggregate.input';
import { FlutterwaveLogMinAggregateInput } from './flutterwave-log-min-aggregate.input';
import { FlutterwaveLogMaxAggregateInput } from './flutterwave-log-max-aggregate.input';

@ArgsType()
export class FlutterwaveLogAggregateArgs {

    @Field(() => FlutterwaveLogWhereInput, {nullable:true})
    where?: FlutterwaveLogWhereInput;

    @Field(() => [FlutterwaveLogOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<FlutterwaveLogOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => FlutterwaveLogWhereUniqueInput, {nullable:true})
    cursor?: FlutterwaveLogWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FlutterwaveLogCountAggregateInput, {nullable:true})
    _count?: FlutterwaveLogCountAggregateInput;

    @Field(() => FlutterwaveLogAvgAggregateInput, {nullable:true})
    _avg?: FlutterwaveLogAvgAggregateInput;

    @Field(() => FlutterwaveLogSumAggregateInput, {nullable:true})
    _sum?: FlutterwaveLogSumAggregateInput;

    @Field(() => FlutterwaveLogMinAggregateInput, {nullable:true})
    _min?: FlutterwaveLogMinAggregateInput;

    @Field(() => FlutterwaveLogMaxAggregateInput, {nullable:true})
    _max?: FlutterwaveLogMaxAggregateInput;
}
