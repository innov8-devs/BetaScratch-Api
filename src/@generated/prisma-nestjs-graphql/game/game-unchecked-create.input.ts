import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { CURRENCY } from '../prisma/currency.enum';

@InputType()
export class GameUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    price!: number;

    @Field(() => CURRENCY, {nullable:true})
    defaultCurrrency?: keyof typeof CURRENCY;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    availability!: number;
}
