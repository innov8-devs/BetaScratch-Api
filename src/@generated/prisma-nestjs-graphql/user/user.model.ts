import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ROLE } from '../prisma/role.enum';
import { GENDER } from '../prisma/gender.enum';
import { Wallet } from '../wallet/wallet.model';
import { Transaction } from '../transaction/transaction.model';
import { Token } from '../token/token.model';
import { Otp } from '../otp/otp.model';
import { WithdrawalRequest } from '../withdrawal-request/withdrawal-request.model';
import { Cart } from '../cart/cart.model';
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

    @Field(() => GENDER, {nullable:false})
    gender!: keyof typeof GENDER;

    @Field(() => String, {nullable:false})
    mobileNumber!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    confirmed!: boolean;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    licenseFrontImage!: string | null;

    @Field(() => String, {nullable:true})
    licenseBackImage!: string | null;

    @Field(() => String, {nullable:false,defaultValue:'inactive'})
    verificationStatus!: string;

    @Field(() => Wallet, {nullable:true})
    wallet?: Wallet | null;

    @Field(() => [Transaction], {nullable:true})
    transactions?: Array<Transaction>;

    @Field(() => [Token], {nullable:true})
    tokens?: Array<Token>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Otp], {nullable:true})
    Otp?: Array<Otp>;

    @Field(() => [WithdrawalRequest], {nullable:true})
    WithdrawalRequest?: Array<WithdrawalRequest>;

    @Field(() => [Cart], {nullable:true})
    Cart?: Array<Cart>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
