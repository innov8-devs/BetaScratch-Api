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
import { CartUncheckedCreateNestedManyWithoutUserInput } from '../cart/cart-unchecked-create-nested-many-without-user.input';
import { MessageUncheckedCreateNestedManyWithoutUserInput } from '../message/message-unchecked-create-nested-many-without-user.input';
import { ReferralUncheckedCreateNestedManyWithoutUserInput } from '../referral/referral-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutTokenInput {

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

    @Field(() => GENDER, {nullable:false})
    gender!: keyof typeof GENDER;

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

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    password!: string;

    @Field(() => String, {nullable:true})
    licenseFrontImage?: string;

    @Field(() => String, {nullable:true})
    licenseBackImage?: string;

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
    Otp?: OtpUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    WithdrawalRequest?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CartUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Cart?: CartUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => MessageUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReferralUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Referral?: ReferralUncheckedCreateNestedManyWithoutUserInput;
}