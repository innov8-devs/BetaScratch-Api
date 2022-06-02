import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateNestedOneWithoutOtpInput } from '../user/user-create-nested-one-without-otp.input';

@InputType()
export class OtpCreateWithoutAdminInput {

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

    @Field(() => UserCreateNestedOneWithoutOtpInput, {nullable:true})
    user?: UserCreateNestedOneWithoutOtpInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
