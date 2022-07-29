import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BannerScalarWhereWithAggregatesInput {

    @Field(() => [BannerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BannerScalarWhereWithAggregatesInput>;

    @Field(() => [BannerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BannerScalarWhereWithAggregatesInput>;

    @Field(() => [BannerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BannerScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    imageUrl?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    url?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
