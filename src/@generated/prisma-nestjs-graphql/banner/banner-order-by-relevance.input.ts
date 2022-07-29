import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerOrderByRelevanceFieldEnum } from './banner-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BannerOrderByRelevanceInput {

    @Field(() => [BannerOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof BannerOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
