import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OtpCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    subject!: number;

    @Field(() => Int, {nullable:false})
    expire!: number;

    @Field(() => Int, {nullable:false})
    validity!: number;

    @Field(() => Int, {nullable:false})
    mobileNumber!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    adminId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
