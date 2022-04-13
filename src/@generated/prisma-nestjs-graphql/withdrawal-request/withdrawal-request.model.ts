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
    User?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => String, {nullable:true})
    bank!: string | null;

    @Field(() => Int, {nullable:true})
    accountNumber!: number | null;

    @Field(() => String, {nullable:true})
    accountName!: string | null;

    @Field(() => Int, {nullable:true})
    amount!: number | null;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    paypal!: string | null;

    @Field(() => String, {nullable:true})
    btcWalletAdderess!: string | null;
}
