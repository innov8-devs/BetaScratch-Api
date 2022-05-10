import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ROLE } from '../prisma/role.enum';
import { GENDER } from '../prisma/gender.enum';
import { Int } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutUserInput } from '../wallet/wallet-create-nested-one-without-user.input';
import { TransactionCreateNestedManyWithoutUserInput } from '../transaction/transaction-create-nested-many-without-user.input';
import { TokenCreateNestedManyWithoutUserInput } from '../token/token-create-nested-many-without-user.input';
import { OtpCreateNestedManyWithoutUserInput } from '../otp/otp-create-nested-many-without-user.input';
import { WithdrawalRequestCreateNestedManyWithoutUserInput } from '../withdrawal-request/withdrawal-request-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutCartInput {

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

    @Field(() => Int, {nullable:true})
    vipStatus?: number;

    @Field(() => WalletCreateNestedOneWithoutUserInput, {nullable:true})
    wallet?: WalletCreateNestedOneWithoutUserInput;

    @Field(() => TransactionCreateNestedManyWithoutUserInput, {nullable:true})
    transactions?: TransactionCreateNestedManyWithoutUserInput;

    @Field(() => TokenCreateNestedManyWithoutUserInput, {nullable:true})
    tokens?: TokenCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OtpCreateNestedManyWithoutUserInput, {nullable:true})
    Otp?: OtpCreateNestedManyWithoutUserInput;

    @Field(() => WithdrawalRequestCreateNestedManyWithoutUserInput, {nullable:true})
    WithdrawalRequest?: WithdrawalRequestCreateNestedManyWithoutUserInput;
}
