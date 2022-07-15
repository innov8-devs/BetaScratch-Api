import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ROLE } from '../prisma/role.enum';
import { OtpUncheckedCreateNestedManyWithoutAdminInput } from '../otp/otp-unchecked-create-nested-many-without-admin.input';
import { MessageUncheckedCreateNestedManyWithoutAdminInput } from '../message/message-unchecked-create-nested-many-without-admin.input';

@InputType()
export class AdminUncheckedCreateWithoutTokenInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MinLength(2)
    firstName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MinLength(2)
    lastName!: string;

    @Field(() => ROLE, {nullable:false})
    role!: keyof typeof ROLE;

    @Field(() => String, {nullable:false})
    @Validator.IsPhoneNumber()
    mobileNumber!: string;

    @Field(() => Boolean, {nullable:true})
    confirmed?: boolean;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsString()
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => OtpUncheckedCreateNestedManyWithoutAdminInput, {nullable:true})
    Otp?: OtpUncheckedCreateNestedManyWithoutAdminInput;

    @Field(() => MessageUncheckedCreateNestedManyWithoutAdminInput, {nullable:true})
    Message?: MessageUncheckedCreateNestedManyWithoutAdminInput;
}
