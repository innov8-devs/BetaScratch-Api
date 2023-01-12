import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class StakedRaffle {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => RAFFLE_TYPE, {nullable:false})
    type!: keyof typeof RAFFLE_TYPE;

    @Field(() => [Int], {nullable:true})
    numbers!: Array<number>;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
