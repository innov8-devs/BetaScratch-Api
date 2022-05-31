import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Admin } from '../admin/admin.model';

@ObjectType()
export class Message {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    link!: string | null;

    @Field(() => Int, {nullable:false})
    readStatus!: number;

    @Field(() => String, {nullable:false})
    messageType!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    cards!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Admin, {nullable:true})
    Admin?: Admin | null;

    @Field(() => Int, {nullable:true})
    adminId!: number | null;
}
