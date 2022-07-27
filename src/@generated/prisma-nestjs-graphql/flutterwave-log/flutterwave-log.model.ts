import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class FlutterwaveLog {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    tx_ref!: string;

    @Field(() => Int, {nullable:false})
    transactionId!: number;

    @Field(() => Int, {nullable:true})
    amount!: number | null;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:false})
    paymentType!: string;

    @Field(() => String, {nullable:true})
    customerName!: string | null;

    @Field(() => String, {nullable:true})
    customerEmail!: string | null;

    @Field(() => String, {nullable:false})
    narration!: string;

    @Field(() => String, {nullable:true})
    processorResponse!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    card!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
