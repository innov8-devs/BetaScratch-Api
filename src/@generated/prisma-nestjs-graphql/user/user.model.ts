import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ROLE } from '../prisma/role.enum';
import { GENDER } from '../prisma/gender.enum';
import { Wallet } from '../wallet/wallet.model';
import { Transaction } from '../transaction/transaction.model';
import { Token } from '../token/token.model';
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

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    confirmed!: boolean;

    @Field(() => String, {nullable:false})
    password!: string;

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

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
