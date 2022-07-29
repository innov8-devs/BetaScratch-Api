import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerWhereInput } from './banner-where.input';
import { BannerOrderByWithRelationAndSearchRelevanceInput } from './banner-order-by-with-relation-and-search-relevance.input';
import { BannerWhereUniqueInput } from './banner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BannerCountAggregateInput } from './banner-count-aggregate.input';
import { BannerAvgAggregateInput } from './banner-avg-aggregate.input';
import { BannerSumAggregateInput } from './banner-sum-aggregate.input';
import { BannerMinAggregateInput } from './banner-min-aggregate.input';
import { BannerMaxAggregateInput } from './banner-max-aggregate.input';

@ArgsType()
export class BannerAggregateArgs {

    @Field(() => BannerWhereInput, {nullable:true})
    where?: BannerWhereInput;

    @Field(() => [BannerOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BannerOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BannerWhereUniqueInput, {nullable:true})
    cursor?: BannerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BannerCountAggregateInput, {nullable:true})
    _count?: BannerCountAggregateInput;

    @Field(() => BannerAvgAggregateInput, {nullable:true})
    _avg?: BannerAvgAggregateInput;

    @Field(() => BannerSumAggregateInput, {nullable:true})
    _sum?: BannerSumAggregateInput;

    @Field(() => BannerMinAggregateInput, {nullable:true})
    _min?: BannerMinAggregateInput;

    @Field(() => BannerMaxAggregateInput, {nullable:true})
    _max?: BannerMaxAggregateInput;
}
