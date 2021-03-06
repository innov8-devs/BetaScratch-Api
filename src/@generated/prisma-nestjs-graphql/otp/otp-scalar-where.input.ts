import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class OtpScalarWhereInput {

    @Field(() => [OtpScalarWhereInput], {nullable:true})
    AND?: Array<OtpScalarWhereInput>;

    @Field(() => [OtpScalarWhereInput], {nullable:true})
    OR?: Array<OtpScalarWhereInput>;

    @Field(() => [OtpScalarWhereInput], {nullable:true})
    NOT?: Array<OtpScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    subject?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expire?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    validity?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    mobileNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    adminId?: IntNullableFilter;
}
