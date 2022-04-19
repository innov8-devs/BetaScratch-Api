import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { CURRENCY } from '../prisma/currency.enum';
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
    @Validator.IsNumber()
    gameId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    @Validator.IsNumber()
    price!: any;

    @Field(() => CURRENCY, {nullable:true})
    defaultCurrrency?: keyof typeof CURRENCY;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    availability!: number;
}
