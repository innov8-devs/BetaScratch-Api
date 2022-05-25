import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReferralCount {

    @Field(() => Int, {nullable:false})
    referrals?: number;
}
