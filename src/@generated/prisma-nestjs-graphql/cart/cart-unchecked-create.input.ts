import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CartUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

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
