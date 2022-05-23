import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCartInput } from '../user/user-create-nested-one-without-cart.input';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';

@InputType()
export class CartCreateInput {

    @Field(() => UserCreateNestedOneWithoutCartInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCartInput;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    category!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    price!: any;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    quantity!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    imageUrl!: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean()
    played?: boolean;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    reference?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
