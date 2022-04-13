import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WithdrawalRequestMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    bank?: true;

    @Field(() => Boolean, {nullable:true})
    accountNumber?: true;

    @Field(() => Boolean, {nullable:true})
    accountName?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    paypal?: true;

    @Field(() => Boolean, {nullable:true})
    btcWalletAdderess?: true;
}
