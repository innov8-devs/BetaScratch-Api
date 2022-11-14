import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PurchaseCount {

    @Field(() => Int, {nullable:false})
    cards?: number;

    @Field(() => Int, {nullable:false})
    coupon?: number;
}
