import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class FlutterwaveLogCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    tx_ref!: string;

    @Field(() => Int, {nullable:false})
    transactionId!: number;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:false})
    paymentType!: string;

    @Field(() => String, {nullable:true})
    customerName?: string;

    @Field(() => String, {nullable:true})
    customerEmail?: string;

    @Field(() => String, {nullable:true})
    customerPhoneNumber?: string;

    @Field(() => String, {nullable:false})
    narration!: string;

    @Field(() => String, {nullable:true})
    processorResponse?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    card?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
