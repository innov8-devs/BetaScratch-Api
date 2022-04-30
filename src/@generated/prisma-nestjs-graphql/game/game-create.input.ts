import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';

@InputType()
export class GameCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    imageUrl!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    description!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    gameId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    price!: any;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    availability!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
