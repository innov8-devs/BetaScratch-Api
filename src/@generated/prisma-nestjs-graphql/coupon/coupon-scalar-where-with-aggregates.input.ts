import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumCOUPON_QUANTITYWithAggregatesFilter } from '../prisma/enum-coupon-quantity-with-aggregates-filter.input';
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

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    capped?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    cappedAmount?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    expires?: IntWithAggregatesFilter;

    @Field(() => EnumCOUPON_QUANTITYWithAggregatesFilter, {nullable:true})
    quantity?: EnumCOUPON_QUANTITYWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    quantityCount?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
