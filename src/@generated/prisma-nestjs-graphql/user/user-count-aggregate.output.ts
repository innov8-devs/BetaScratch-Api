import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    username!: number;

    @Field(() => Int, {nullable:false})
    firstName!: number;

    @Field(() => Int, {nullable:false})
    lastName!: number;

    @Field(() => Int, {nullable:false})
    dateOfBirth!: number;

    @Field(() => Int, {nullable:false})
    role!: number;

    @Field(() => Int, {nullable:false})
    gender!: number;

    @Field(() => Int, {nullable:false})
    mobileNumber!: number;

    @Field(() => Int, {nullable:false})
    state!: number;

    @Field(() => Int, {nullable:false})
    country!: number;

    @Field(() => Int, {nullable:false})
    confirmed!: number;

    @Field(() => Int, {nullable:false})
    password!: number;

    @Field(() => Int, {nullable:false})
    licenseFrontImage!: number;

    @Field(() => Int, {nullable:false})
    licenseBackImage!: number;

    @Field(() => Int, {nullable:false})
    verificationStatus!: number;

    @Field(() => Int, {nullable:false})
    vipStatus!: number;

    @Field(() => Int, {nullable:false})
    referralId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
