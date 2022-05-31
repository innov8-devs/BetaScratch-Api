import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ROLE } from '../prisma/role.enum';
import { OtpCreateNestedManyWithoutAdminInput } from '../otp/otp-create-nested-many-without-admin.input';
import { MessageCreateNestedManyWithoutAdminInput } from '../message/message-create-nested-many-without-admin.input';
import { TokenCreateNestedManyWithoutAdminInput } from '../token/token-create-nested-many-without-admin.input';

@InputType()
export class AdminCreateInput {

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
    @Validator.IsDate()
    role!: keyof typeof ROLE;

    @Field(() => String, {nullable:false})
    @Validator.IsPhoneNumber()
    mobileNumber!: string;

    @Field(() => Boolean, {nullable:true})
    confirmed?: boolean;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => OtpCreateNestedManyWithoutAdminInput, {nullable:true})
    Otp?: OtpCreateNestedManyWithoutAdminInput;

    @Field(() => MessageCreateNestedManyWithoutAdminInput, {nullable:true})
    Message?: MessageCreateNestedManyWithoutAdminInput;

    @Field(() => TokenCreateNestedManyWithoutAdminInput, {nullable:true})
    Token?: TokenCreateNestedManyWithoutAdminInput;
}
