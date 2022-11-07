import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CouponScalarWhereWithAggregatesInput {

    @Field(() => [CouponScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CouponScalarWhereWithAggregatesInput>;

    @Field(() => [CouponScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CouponScalarWhereWithAggregatesInput>;

    @Field(() => [CouponScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CouponScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    percentage?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    status?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    cap?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    capAmount?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    validity?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expire?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
