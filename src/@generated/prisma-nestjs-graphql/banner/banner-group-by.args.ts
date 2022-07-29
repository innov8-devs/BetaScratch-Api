import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerWhereInput } from './banner-where.input';
import { BannerOrderByWithAggregationInput } from './banner-order-by-with-aggregation.input';
import { BannerScalarFieldEnum } from './banner-scalar-field.enum';
import { BannerScalarWhereWithAggregatesInput } from './banner-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BannerCountAggregateInput } from './banner-count-aggregate.input';
import { BannerAvgAggregateInput } from './banner-avg-aggregate.input';
import { BannerSumAggregateInput } from './banner-sum-aggregate.input';
import { BannerMinAggregateInput } from './banner-min-aggregate.input';
import { BannerMaxAggregateInput } from './banner-max-aggregate.input';

@ArgsType()
export class BannerGroupByArgs {

    @Field(() => BannerWhereInput, {nullable:true})
    where?: BannerWhereInput;

    @Field(() => [BannerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BannerOrderByWithAggregationInput>;

    @Field(() => [BannerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BannerScalarFieldEnum>;

    @Field(() => BannerScalarWhereWithAggregatesInput, {nullable:true})
    having?: BannerScalarWhereWithAggregatesInput;

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
