import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';
import { TRANSACTION_TYPE } from '../prisma/transaction-type.enum';

@InputType()
export class StakedRaffleTicketsUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => RAFFLE_TYPE, {nullable:false})
    type!: keyof typeof RAFFLE_TYPE;

    @Field(() => String, {nullable:false})
    originalNumbers!: string;

    @Field(() => String, {nullable:false})
    sortedNumbers!: string;

    @Field(() => String, {nullable:true})
    reference?: string;

    @Field(() => TRANSACTION_TYPE, {nullable:false})
    transactionType!: keyof typeof TRANSACTION_TYPE;

    @Field(() => Boolean, {nullable:false})
    isPaid!: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
