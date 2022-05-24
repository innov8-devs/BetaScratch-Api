import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReferralSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [Int], {nullable:true})
    referrals?: Array<number>;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
