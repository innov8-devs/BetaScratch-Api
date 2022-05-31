import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class OtpCreateManyUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    subject!: string;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => Boolean, {nullable:false})
    @Validator.IsBoolean()
    validity!: boolean;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    mobileNumber!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    code!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    adminId?: number;
}
