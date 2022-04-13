import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumROLEFilter } from '../prisma/enum-role-filter.input';
import { EnumGENDERFilter } from '../prisma/enum-gender-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';
import { TransactionListRelationFilter } from '../transaction/transaction-list-relation-filter.input';
import { TokenListRelationFilter } from '../token/token-list-relation-filter.input';
import { OtpListRelationFilter } from '../otp/otp-list-relation-filter.input';
import { WithdrawalRequestListRelationFilter } from '../withdrawal-request/withdrawal-request-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dateOfBirth?: DateTimeFilter;

    @Field(() => EnumROLEFilter, {nullable:true})
    role?: EnumROLEFilter;

    @Field(() => EnumGENDERFilter, {nullable:true})
    gender?: EnumGENDERFilter;

    @Field(() => StringFilter, {nullable:true})
    mobileNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    state?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    confirmed?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    wallet?: WalletRelationFilter;

    @Field(() => TransactionListRelationFilter, {nullable:true})
    transactions?: TransactionListRelationFilter;

    @Field(() => TokenListRelationFilter, {nullable:true})
    tokens?: TokenListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => OtpListRelationFilter, {nullable:true})
    Otp?: OtpListRelationFilter;

    @Field(() => WithdrawalRequestListRelationFilter, {nullable:true})
    WithdrawalRequest?: WithdrawalRequestListRelationFilter;
}
