import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class MessageCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

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

    @Field(() => GraphQLJSON, {nullable:true})
    cards?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
