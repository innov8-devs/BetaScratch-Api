import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Purchase } from '../purchase/purchase.model';

@ObjectType()
export class Cart {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    price!: any;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    played!: boolean;

    @Field(() => String, {nullable:false})
    reference!: string;

    @Field(() => String, {nullable:true})
    transactionRef!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Purchase, {nullable:true})
    purchase?: Purchase | null;

    @Field(() => Int, {nullable:true})
    purchaseId!: number | null;
}
