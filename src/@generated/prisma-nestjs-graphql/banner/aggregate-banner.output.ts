import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BannerCountAggregate } from './banner-count-aggregate.output';
import { BannerAvgAggregate } from './banner-avg-aggregate.output';
import { BannerSumAggregate } from './banner-sum-aggregate.output';
import { BannerMinAggregate } from './banner-min-aggregate.output';
import { BannerMaxAggregate } from './banner-max-aggregate.output';

@ObjectType()
export class AggregateBanner {

    @Field(() => BannerCountAggregate, {nullable:true})
    _count?: BannerCountAggregate;

    @Field(() => BannerAvgAggregate, {nullable:true})
    _avg?: BannerAvgAggregate;

    @Field(() => BannerSumAggregate, {nullable:true})
    _sum?: BannerSumAggregate;

    @Field(() => BannerMinAggregate, {nullable:true})
    _min?: BannerMinAggregate;

    @Field(() => BannerMaxAggregate, {nullable:true})
    _max?: BannerMaxAggregate;
}
