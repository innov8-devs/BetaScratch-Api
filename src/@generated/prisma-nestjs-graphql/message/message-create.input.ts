import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMessageInput } from '../user/user-create-nested-one-without-message.input';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { AdminCreateNestedOneWithoutMessageInput } from '../admin/admin-create-nested-one-without-message.input';

@InputType()
export class MessageCreateInput {

    @Field(() => UserCreateNestedOneWithoutMessageInput, {nullable:false})
    user!: UserCreateNestedOneWithoutMessageInput;

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

    @Field(() => AdminCreateNestedOneWithoutMessageInput, {nullable:true})
    Admin?: AdminCreateNestedOneWithoutMessageInput;
}
