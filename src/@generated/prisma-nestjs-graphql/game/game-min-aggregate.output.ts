import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CURRENCY } from '../prisma/currency.enum';

@ObjectType()
export class GameMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    gameId?: string;

    @Field(() => CURRENCY, {nullable:true})
    defaultCurrrency?: keyof typeof CURRENCY;

    @Field(() => Int, {nullable:true})
    availability?: number;
}
