import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WithdrawalRequestCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    bank?: string;

    @Field(() => String, {nullable:true})
    accountNumber?: string;

    @Field(() => String, {nullable:true})
    accountName?: string;

    @Field(() => String, {nullable:false})
    amount!: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    paypal?: string;

    @Field(() => String, {nullable:true})
    btcWalletAdderess?: string;

    @Field(() => String, {nullable:true})
    licenseNumber?: string;

    @Field(() => String, {nullable:true})
    licenseType?: string;
}
