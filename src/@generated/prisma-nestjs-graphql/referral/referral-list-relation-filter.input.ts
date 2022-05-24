import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralWhereInput } from './referral-where.input';

@InputType()
export class ReferralListRelationFilter {

    @Field(() => ReferralWhereInput, {nullable:true})
    every?: ReferralWhereInput;

    @Field(() => ReferralWhereInput, {nullable:true})
    some?: ReferralWhereInput;

    @Field(() => ReferralWhereInput, {nullable:true})
    none?: ReferralWhereInput;
}
