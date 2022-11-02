import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumCOUPON_TYPEWithAggregatesFilter } from '../prisma/enum-coupon-type-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

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

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    validity?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expire?: DateTimeWithAggregatesFilter;

    @Field(() => EnumCOUPON_TYPEWithAggregatesFilter, {nullable:true})
    type?: EnumCOUPON_TYPEWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    percentage?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    amount?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
