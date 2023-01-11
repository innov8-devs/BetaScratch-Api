import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Raffle {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => RAFFLE_TYPE, {nullable:false})
    type!: keyof typeof RAFFLE_TYPE;

    @Field(() => Int, {nullable:false})
    win!: number;

    @Field(() => Int, {nullable:false})
    stake!: number;

    @Field(() => Date, {nullable:false})
    expiriy!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
