import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumROLEFilter } from '../prisma/enum-role-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OtpListRelationFilter } from '../otp/otp-list-relation-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { TokenListRelationFilter } from '../token/token-list-relation-filter.input';

@InputType()
export class AdminWhereInput {

    @Field(() => [AdminWhereInput], {nullable:true})
    AND?: Array<AdminWhereInput>;

    @Field(() => [AdminWhereInput], {nullable:true})
    OR?: Array<AdminWhereInput>;

    @Field(() => [AdminWhereInput], {nullable:true})
    NOT?: Array<AdminWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => EnumROLEFilter, {nullable:true})
    role?: EnumROLEFilter;

    @Field(() => StringFilter, {nullable:true})
    mobileNumber?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    confirmed?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => OtpListRelationFilter, {nullable:true})
    Otp?: OtpListRelationFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    Message?: MessageListRelationFilter;

    @Field(() => TokenListRelationFilter, {nullable:true})
    Token?: TokenListRelationFilter;
}
