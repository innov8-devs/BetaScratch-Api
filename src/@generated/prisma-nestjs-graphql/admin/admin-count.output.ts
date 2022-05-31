import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdminCount {

    @Field(() => Int, {nullable:false})
    Otp?: number;

    @Field(() => Int, {nullable:false})
    Message?: number;

    @Field(() => Int, {nullable:false})
    Token?: number;
}
