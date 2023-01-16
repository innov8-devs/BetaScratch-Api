import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ROLE } from '../prisma/role.enum';
import { GENDER } from '../prisma/gender.enum';
import { Float } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutUserInput } from '../wallet/wallet-create-nested-one-without-user.input';
import { TransactionCreateNestedManyWithoutUserInput } from '../transaction/transaction-create-nested-many-without-user.input';
import { OtpCreateNestedManyWithoutUserInput } from '../otp/otp-create-nested-many-without-user.input';
import { WithdrawalRequestCreateNestedManyWithoutUserInput } from '../withdrawal-request/withdrawal-request-create-nested-many-without-user.input';
import { CartCreateNestedManyWithoutUserInput } from '../cart/cart-create-nested-many-without-user.input';
import { MessageCreateNestedManyWithoutUserInput } from '../message/message-create-nested-many-without-user.input';
import { TokenCreateNestedManyWithoutUserInput } from '../token/token-create-nested-many-without-user.input';
import { PurchaseCreateNestedManyWithoutUserInput } from '../purchase/purchase-create-nested-many-without-user.input';
import { ResetPasswordMetricsCreateNestedManyWithoutUserInput } from '../reset-password-metrics/reset-password-metrics-create-nested-many-without-user.input';
import { StakedRaffleTicketsCreateNestedManyWithoutUserInput } from '../staked-raffle-tickets/staked-raffle-tickets-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutReferralInput {

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

    @Field(() => WalletCreateNestedOneWithoutUserInput, {nullable:true})
    wallet?: WalletCreateNestedOneWithoutUserInput;

    @Field(() => TransactionCreateNestedManyWithoutUserInput, {nullable:true})
    transactions?: TransactionCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OtpCreateNestedManyWithoutUserInput, {nullable:true})
    otp?: OtpCreateNestedManyWithoutUserInput;

    @Field(() => WithdrawalRequestCreateNestedManyWithoutUserInput, {nullable:true})
    withdrawalRequest?: WithdrawalRequestCreateNestedManyWithoutUserInput;

    @Field(() => CartCreateNestedManyWithoutUserInput, {nullable:true})
    purchases?: CartCreateNestedManyWithoutUserInput;

    @Field(() => MessageCreateNestedManyWithoutUserInput, {nullable:true})
    message?: MessageCreateNestedManyWithoutUserInput;

    @Field(() => TokenCreateNestedManyWithoutUserInput, {nullable:true})
    token?: TokenCreateNestedManyWithoutUserInput;

    @Field(() => PurchaseCreateNestedManyWithoutUserInput, {nullable:true})
    purchase?: PurchaseCreateNestedManyWithoutUserInput;

    @Field(() => ResetPasswordMetricsCreateNestedManyWithoutUserInput, {nullable:true})
    ResetPasswordMetrics?: ResetPasswordMetricsCreateNestedManyWithoutUserInput;

    @Field(() => StakedRaffleTicketsCreateNestedManyWithoutUserInput, {nullable:true})
    stakedRaffleTickets?: StakedRaffleTicketsCreateNestedManyWithoutUserInput;
}
