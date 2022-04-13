import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutWithdrawalRequestInput } from '../user/user-create-nested-one-without-withdrawal-request.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class WithdrawalRequestCreateInput {

    @Field(() => UserCreateNestedOneWithoutWithdrawalRequestInput, {nullable:true})
    User?: UserCreateNestedOneWithoutWithdrawalRequestInput;

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
