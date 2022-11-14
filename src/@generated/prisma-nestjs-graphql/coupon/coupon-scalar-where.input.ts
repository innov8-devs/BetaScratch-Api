import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumCOUPON_QUANTITYFilter } from '../prisma/enum-coupon-quantity-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CouponScalarWhereInput {

    @Field(() => [CouponScalarWhereInput], {nullable:true})
    AND?: Array<CouponScalarWhereInput>;

    @Field(() => [CouponScalarWhereInput], {nullable:true})
    OR?: Array<CouponScalarWhereInput>;

    @Field(() => [CouponScalarWhereInput], {nullable:true})
    NOT?: Array<CouponScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    percentage?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    capped?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    cappedAmount?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    expires?: IntFilter;

    @Field(() => EnumCOUPON_QUANTITYFilter, {nullable:true})
    quantity?: EnumCOUPON_QUANTITYFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    quantityCount?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    quantityUsed?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    purchaseId?: IntNullableFilter;
}
