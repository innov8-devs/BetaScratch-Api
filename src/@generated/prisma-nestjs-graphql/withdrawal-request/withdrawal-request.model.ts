import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WithdrawalRequest {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => String, {nullable:true})
    bank!: string | null;

    @Field(() => String, {nullable:true})
    accountNumber!: string | null;

    @Field(() => String, {nullable:true})
    accountName!: string | null;

    @Field(() => String, {nullable:false})
    amount!: string;

    @Field(() => String, {nullable:true})
    status!: string | null;

    @Field(() => String, {nullable:true})
    paypal!: string | null;

    @Field(() => String, {nullable:true})
    btcWalletAdderess!: string | null;

    @Field(() => String, {nullable:true})
    licenseNumber!: string | null;

    @Field(() => String, {nullable:true})
    licenseType!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
