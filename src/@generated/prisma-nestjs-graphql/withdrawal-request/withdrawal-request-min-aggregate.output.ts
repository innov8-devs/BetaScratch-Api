import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WithdrawalRequestMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    bank?: string;

    @Field(() => String, {nullable:true})
    accountNumber?: string;

    @Field(() => String, {nullable:true})
    accountName?: string;

    @Field(() => String, {nullable:true})
    amount?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
