import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BannerOrderByRelevanceInput } from './banner-order-by-relevance.input';

@InputType()
export class BannerOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => BannerOrderByRelevanceInput, {nullable:true})
    _relevance?: BannerOrderByRelevanceInput;
}
