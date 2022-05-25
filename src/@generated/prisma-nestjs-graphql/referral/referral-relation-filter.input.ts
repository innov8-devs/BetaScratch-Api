import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralWhereInput } from './referral-where.input';

@InputType()
export class ReferralRelationFilter {

    @Field(() => ReferralWhereInput, {nullable:true})
    is?: ReferralWhereInput;

    @Field(() => ReferralWhereInput, {nullable:true})
    isNot?: ReferralWhereInput;
}
