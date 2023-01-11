import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class RaffleCreateInput {

    @Field(() => RAFFLE_TYPE, {nullable:false})
    type!: keyof typeof RAFFLE_TYPE;

    @Field(() => Int, {nullable:false})
    win!: number;

    @Field(() => Int, {nullable:false})
    stake!: number;

    @Field(() => Date, {nullable:false})
    expiriy!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
