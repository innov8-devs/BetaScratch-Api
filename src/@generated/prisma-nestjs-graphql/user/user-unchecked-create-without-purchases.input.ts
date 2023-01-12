import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ROLE } from '../prisma/role.enum';
import { GENDER } from '../prisma/gender.enum';
import { Float } from '@nestjs/graphql';
import { WalletUncheckedCreateNestedOneWithoutUserInput } from '../wallet/wallet-unchecked-create-nested-one-without-user.input';
import { TransactionUncheckedCreateNestedManyWithoutUserInput } from '../transaction/transaction-unchecked-create-nested-many-without-user.input';
import { OtpUncheckedCreateNestedManyWithoutUserInput } from '../otp/otp-unchecked-create-nested-many-without-user.input';
import { WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput } from '../withdrawal-request/withdrawal-request-unchecked-create-nested-many-without-user.input';
import { MessageUncheckedCreateNestedManyWithoutUserInput } from '../message/message-unchecked-create-nested-many-without-user.input';
import { ReferralUncheckedCreateNestedManyWithoutUserInput } from '../referral/referral-unchecked-create-nested-many-without-user.input';
import { TokenUncheckedCreateNestedManyWithoutUserInput } from '../token/token-unchecked-create-nested-many-without-user.input';
import { PurchaseUncheckedCreateNestedManyWithoutUserInput } from '../purchase/purchase-unchecked-create-nested-many-without-user.input';
import { ResetPasswordMetricsUncheckedCreateNestedManyWithoutUserInput } from '../reset-password-metrics/reset-password-metrics-unchecked-create-nested-many-without-user.input';
import { StakedRaffleUncheckedCreateNestedManyWithoutUserInput } from '../staked-raffle/staked-raffle-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutPurchasesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsString()
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MinLength(2)
    firstName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MinLength(2)
    lastName!: string;

    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    dateOfBirth!: Date | string;

    @Field(() => ROLE, {nullable:true})
    role?: keyof typeof ROLE;

    @Field(() => GENDER, {nullable:true})
    gender?: keyof typeof GENDER;

    @Field(() => String, {nullable:false})
    @Validator.IsPhoneNumber()
    mobileNumber!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    state!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    country!: string;

    @Field(() => Boolean, {nullable:true})
    confirmed?: boolean;

    @Field(() => Boolean, {nullable:true})
    disabled?: boolean;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    password!: string;

    @Field(() => String, {nullable:true})
    licenseFrontImage?: string;

    @Field(() => String, {nullable:true})
    licenseBackImage?: string;

    @Field(() => String, {nullable:true})
    licenseNumber?: string;

    @Field(() => String, {nullable:true})
    verificationType?: string;

    @Field(() => String, {nullable:true})
    verificationStatus?: string;

    @Field(() => Float, {nullable:true})
    vipStatus?: number;

    @Field(() => WalletUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => TransactionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OtpUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    otp?: OtpUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    withdrawalRequest?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => MessageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    message?: MessageUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReferralUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    referral?: ReferralUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => TokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    token?: TokenUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PurchaseUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    purchase?: PurchaseUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ResetPasswordMetricsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    ResetPasswordMetrics?: ResetPasswordMetricsUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => StakedRaffleUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    stakedRaffle?: StakedRaffleUncheckedCreateNestedManyWithoutUserInput;
}
