import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';

@InputType()
export class StakedRaffleWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => RAFFLE_TYPE, {nullable:true})
    type?: keyof typeof RAFFLE_TYPE;
}
