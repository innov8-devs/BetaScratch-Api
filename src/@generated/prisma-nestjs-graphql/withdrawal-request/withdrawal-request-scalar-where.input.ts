import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

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

    @Field(() => IntNullableFilter, {nullable:true})
    accountNumber?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    accountName?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    amount?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    paypal?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    btcWalletAdderess?: StringNullableFilter;
}