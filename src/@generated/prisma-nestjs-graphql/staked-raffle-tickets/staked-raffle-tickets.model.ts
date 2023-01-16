import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';
import { TRANSACTION_TYPE } from '../prisma/transaction-type.enum';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StakedRaffleTickets {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => RAFFLE_TYPE, {nullable:false})
    type!: keyof typeof RAFFLE_TYPE;

    @Field(() => String, {nullable:false})
    originalNumbers!: string;

    @Field(() => String, {nullable:false})
    sortedNumbers!: string;

    @Field(() => String, {nullable:true})
    reference!: string | null;

    @Field(() => TRANSACTION_TYPE, {nullable:false})
    transactionType!: keyof typeof TRANSACTION_TYPE;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => Boolean, {nullable:false})
    isPaid!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
