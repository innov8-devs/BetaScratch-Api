import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    transactions?: number;

    @Field(() => Int, {nullable:false})
    tokens?: number;

    @Field(() => Int, {nullable:false})
    Otp?: number;

    @Field(() => Int, {nullable:false})
    WithdrawalRequest?: number;

    @Field(() => Int, {nullable:false})
    Cart?: number;
}
