import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class WithdrawalRequestWhereInput {

    @Field(() => [WithdrawalRequestWhereInput], {nullable:true})
    AND?: Array<WithdrawalRequestWhereInput>;

    @Field(() => [WithdrawalRequestWhereInput], {nullable:true})
    OR?: Array<WithdrawalRequestWhereInput>;

    @Field(() => [WithdrawalRequestWhereInput], {nullable:true})
    NOT?: Array<WithdrawalRequestWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

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
}
