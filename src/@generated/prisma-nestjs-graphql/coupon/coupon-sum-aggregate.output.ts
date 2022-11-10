import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CouponSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    percentage?: number;

    @Field(() => Int, {nullable:true})
    cappedAmount?: number;

    @Field(() => Int, {nullable:true})
    expires?: number;

    @Field(() => Int, {nullable:true})
    quantityCount?: number;

    @Field(() => Int, {nullable:true})
    quantityUsed?: number;
}
