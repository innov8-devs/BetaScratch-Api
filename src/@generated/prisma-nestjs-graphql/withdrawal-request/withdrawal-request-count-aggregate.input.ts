import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WithdrawalRequestCountAggregateInput {

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

    @Field(() => Boolean, {nullable:true})
    licenseNumber?: true;

    @Field(() => Boolean, {nullable:true})
    licenseType?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
