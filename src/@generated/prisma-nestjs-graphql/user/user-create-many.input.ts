import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ROLE } from '../prisma/role.enum';
import { GENDER } from '../prisma/gender.enum';
import { Float } from '@nestjs/graphql';

@InputType()
export class UserCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsString()
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MinLength(2)
    firstName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MinLength(2)
    lastName!: string;

    @Field(() => Date, {nullable:false})
    @Validator.IsDate()
    dateOfBirth!: Date | string;

    @Field(() => ROLE, {nullable:true})
    role?: keyof typeof ROLE;

    @Field(() => GENDER, {nullable:false})
    gender!: keyof typeof GENDER;

    @Field(() => String, {nullable:false})
    @Validator.IsPhoneNumber()
    mobileNumber!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    state!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    country!: string;

    @Field(() => Boolean, {nullable:true})
    confirmed?: boolean;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    password!: string;

    @Field(() => String, {nullable:true})
    licenseFrontImage?: string;

    @Field(() => String, {nullable:true})
    licenseBackImage?: string;

    @Field(() => String, {nullable:true})
    verificationStatus?: string;

    @Field(() => Float, {nullable:true})
    vipStatus?: number;

    @Field(() => String, {nullable:true})
    referralId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
