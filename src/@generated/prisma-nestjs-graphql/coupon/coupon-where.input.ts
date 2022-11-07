import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

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

    @Field(() => IntFilter, {nullable:true})
    percentage?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    status?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    cap?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    capAmount?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    validity?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expire?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
