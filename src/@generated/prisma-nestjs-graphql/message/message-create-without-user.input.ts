import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';

@InputType()
export class MessageCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    title!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    description!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    link?: string;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    readStatus!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    messageType!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
