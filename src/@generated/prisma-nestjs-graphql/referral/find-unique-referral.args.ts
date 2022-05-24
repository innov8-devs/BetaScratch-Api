import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';

@ArgsType()
export class FindUniqueReferralArgs {

    @Field(() => ReferralWhereUniqueInput, {nullable:false})
    where!: ReferralWhereUniqueInput;
}
