import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class WithdrawalRequestScalarWhereInput {

    @Field(() => [WithdrawalRequestScalarWhereInput], {nullable:true})
    AND?: Array<WithdrawalRequestScalarWhereInput>;

    @Field(() => [WithdrawalRequestScalarWhereInput], {nullable:true})
    OR?: Array<WithdrawalRequestScalarWhereInput>;

    @Field(() => [WithdrawalRequestScalarWhereInput], {nullable:true})
    NOT?: Array<WithdrawalRequestScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bank?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    accountNumber?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    accountName?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    amount?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    status?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    paypal?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    btcWalletAdderess?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    licenseNumber?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    licenseType?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
