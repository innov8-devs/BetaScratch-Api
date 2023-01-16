import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';
import { TRANSACTION_TYPE } from '../prisma/transaction-type.enum';

@ObjectType()
export class StakedRaffleTicketsMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => RAFFLE_TYPE, {nullable:true})
    type?: keyof typeof RAFFLE_TYPE;

    @Field(() => String, {nullable:true})
    originalNumbers?: string;

    @Field(() => String, {nullable:true})
    sortedNumbers?: string;

    @Field(() => String, {nullable:true})
    reference?: string;

    @Field(() => TRANSACTION_TYPE, {nullable:true})
    transactionType?: keyof typeof TRANSACTION_TYPE;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Boolean, {nullable:true})
    isPaid?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
