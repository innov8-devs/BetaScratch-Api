import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';

@ObjectType()
export class StakedRaffleMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => RAFFLE_TYPE, {nullable:true})
    type?: keyof typeof RAFFLE_TYPE;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
