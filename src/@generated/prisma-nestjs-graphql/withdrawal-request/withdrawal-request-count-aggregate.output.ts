import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WithdrawalRequestCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    bank!: number;

    @Field(() => Int, {nullable:false})
    accountNumber!: number;

    @Field(() => Int, {nullable:false})
    accountName!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    paypal!: number;

    @Field(() => Int, {nullable:false})
    btcWalletAdderess!: number;

    @Field(() => Int, {nullable:false})
    licenseNumber!: number;

    @Field(() => Int, {nullable:false})
    licenseType!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
