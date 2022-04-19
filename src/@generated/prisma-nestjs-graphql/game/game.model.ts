import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CURRENCY } from '../prisma/currency.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Game {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    gameId!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    price!: any;

    @Field(() => CURRENCY, {nullable:false,defaultValue:'USD'})
    defaultCurrrency!: keyof typeof CURRENCY;

    @Field(() => Int, {nullable:false})
    availability!: number;
}
