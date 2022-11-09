import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    transactions?: number;

    @Field(() => Int, {nullable:false})
    otp?: number;

    @Field(() => Int, {nullable:false})
    withdrawalRequest?: number;

    @Field(() => Int, {nullable:false})
    purchases?: number;

    @Field(() => Int, {nullable:false})
    message?: number;

    @Field(() => Int, {nullable:false})
    referral?: number;

    @Field(() => Int, {nullable:false})
    token?: number;

    @Field(() => Int, {nullable:false})
    purchase?: number;

    @Field(() => Int, {nullable:false})
    ResetPasswordMetrics?: number;
}
