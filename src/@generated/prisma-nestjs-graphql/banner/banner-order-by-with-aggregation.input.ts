import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BannerCountOrderByAggregateInput } from './banner-count-order-by-aggregate.input';
import { BannerAvgOrderByAggregateInput } from './banner-avg-order-by-aggregate.input';
import { BannerMaxOrderByAggregateInput } from './banner-max-order-by-aggregate.input';
import { BannerMinOrderByAggregateInput } from './banner-min-order-by-aggregate.input';
import { BannerSumOrderByAggregateInput } from './banner-sum-order-by-aggregate.input';

@InputType()
export class BannerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => BannerCountOrderByAggregateInput, {nullable:true})
    _count?: BannerCountOrderByAggregateInput;

    @Field(() => BannerAvgOrderByAggregateInput, {nullable:true})
    _avg?: BannerAvgOrderByAggregateInput;

    @Field(() => BannerMaxOrderByAggregateInput, {nullable:true})
    _max?: BannerMaxOrderByAggregateInput;

    @Field(() => BannerMinOrderByAggregateInput, {nullable:true})
    _min?: BannerMinOrderByAggregateInput;

    @Field(() => BannerSumOrderByAggregateInput, {nullable:true})
    _sum?: BannerSumOrderByAggregateInput;
}
