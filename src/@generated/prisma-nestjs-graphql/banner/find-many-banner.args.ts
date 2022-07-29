import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerWhereInput } from './banner-where.input';
import { BannerOrderByWithRelationAndSearchRelevanceInput } from './banner-order-by-with-relation-and-search-relevance.input';
import { BannerWhereUniqueInput } from './banner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BannerScalarFieldEnum } from './banner-scalar-field.enum';

@ArgsType()
export class FindManyBannerArgs {

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

    @Field(() => [BannerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BannerScalarFieldEnum>;
}
