import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class TransactionUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    amount!: number;

    @Field(() => Int, {nullable:false})
    @Validator.IsString()
    transactionId!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    currency!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    transactionRef!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    purpose!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    type?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
