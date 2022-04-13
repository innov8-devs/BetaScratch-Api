import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class WithdrawalRequestCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    bank?: string;

    @Field(() => Int, {nullable:true})
    accountNumber?: number;

    @Field(() => String, {nullable:true})
    accountName?: string;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    paypal?: string;

    @Field(() => String, {nullable:true})
    btcWalletAdderess?: string;
}
