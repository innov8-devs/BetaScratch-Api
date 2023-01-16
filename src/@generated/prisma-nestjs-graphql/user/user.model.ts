import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ROLE } from '../prisma/role.enum';
import { GENDER } from '../prisma/gender.enum';
import { Float } from '@nestjs/graphql';
import { Wallet } from '../wallet/wallet.model';
import { Transaction } from '../transaction/transaction.model';
import { Otp } from '../otp/otp.model';
import { WithdrawalRequest } from '../withdrawal-request/withdrawal-request.model';
import { Cart } from '../cart/cart.model';
import { Message } from '../message/message.model';
import { Referral } from '../referral/referral.model';
import { Token } from '../token/token.model';
import { Purchase } from '../purchase/purchase.model';
import { ResetPasswordMetrics } from '../reset-password-metrics/reset-password-metrics.model';
import { StakedRaffleTickets } from '../staked-raffle-tickets/staked-raffle-tickets.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Date, {nullable:false})
    dateOfBirth!: Date;

    @Field(() => ROLE, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof ROLE;

    @Field(() => GENDER, {nullable:false,defaultValue:'OTHER'})
    gender!: keyof typeof GENDER;

    @Field(() => String, {nullable:false})
    mobileNumber!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    confirmed!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    disabled!: boolean;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    licenseFrontImage!: string | null;

    @Field(() => String, {nullable:true})
    licenseBackImage!: string | null;

    @Field(() => String, {nullable:true})
    licenseNumber!: string | null;

    @Field(() => String, {nullable:true})
    verificationType!: string | null;

    @Field(() => String, {nullable:false,defaultValue:'inactive'})
    verificationStatus!: string;

    @Field(() => Float, {nullable:false,defaultValue:0})
    vipStatus!: number;

    @Field(() => Wallet, {nullable:true})
    wallet?: Wallet | null;

    @Field(() => [Transaction], {nullable:true})
    transactions?: Array<Transaction>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Otp], {nullable:true})
    otp?: Array<Otp>;

    @Field(() => [WithdrawalRequest], {nullable:true})
    withdrawalRequest?: Array<WithdrawalRequest>;

    @Field(() => [Cart], {nullable:true})
    purchases?: Array<Cart>;

    @Field(() => [Message], {nullable:true})
    message?: Array<Message>;

    @Field(() => [Referral], {nullable:true})
    referral?: Array<Referral>;

    @Field(() => [Token], {nullable:true})
    token?: Array<Token>;

    @Field(() => [Purchase], {nullable:true})
    purchase?: Array<Purchase>;

    @Field(() => [ResetPasswordMetrics], {nullable:true})
    ResetPasswordMetrics?: Array<ResetPasswordMetrics>;

    @Field(() => [StakedRaffleTickets], {nullable:true})
    stakedRaffleTickets?: Array<StakedRaffleTickets>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
