import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PurchaseSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => Int, {nullable:true})
    subtotal?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
