import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TRANSACTION_TYPE } from '../prisma/transaction-type.enum';

@ObjectType()
export class PurchaseMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:true})
    reference?: string;

    @Field(() => Int, {nullable:true})
    subtotal?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => TRANSACTION_TYPE, {nullable:true})
    transactionType?: keyof typeof TRANSACTION_TYPE;

    @Field(() => String, {nullable:true})
    flutterwaveType?: string;

    @Field(() => Boolean, {nullable:true})
    couponUsed?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
