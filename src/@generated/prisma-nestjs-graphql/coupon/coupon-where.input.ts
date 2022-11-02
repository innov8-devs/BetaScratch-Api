import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumCOUPON_TYPEFilter } from '../prisma/enum-coupon-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class CouponWhereInput {

    @Field(() => [CouponWhereInput], {nullable:true})
    AND?: Array<CouponWhereInput>;

    @Field(() => [CouponWhereInput], {nullable:true})
    OR?: Array<CouponWhereInput>;

    @Field(() => [CouponWhereInput], {nullable:true})
    NOT?: Array<CouponWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    validity?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expire?: DateTimeFilter;

    @Field(() => EnumCOUPON_TYPEFilter, {nullable:true})
    type?: EnumCOUPON_TYPEFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    percentage?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    amount?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
