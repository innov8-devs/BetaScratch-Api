import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.MinLength(2)
    @Validator.IsString()
    username?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsPhoneNumber()
    mobileNumber?: string;
}
