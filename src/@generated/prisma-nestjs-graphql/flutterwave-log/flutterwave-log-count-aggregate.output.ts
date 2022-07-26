import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FlutterwaveLogCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    tx_ref!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    ip!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    paymentType!: number;

    @Field(() => Int, {nullable:false})
    customerName!: number;

    @Field(() => Int, {nullable:false})
    customerEmail!: number;

    @Field(() => Int, {nullable:false})
    narration!: number;

    @Field(() => Int, {nullable:false})
    processorResponse!: number;

    @Field(() => Int, {nullable:false})
    card!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
