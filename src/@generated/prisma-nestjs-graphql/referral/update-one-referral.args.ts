import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferralUpdateInput } from './referral-update.input';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';

@ArgsType()
export class UpdateOneReferralArgs {

    @Field(() => ReferralUpdateInput, {nullable:false})
    data!: ReferralUpdateInput;

    @Field(() => ReferralWhereUniqueInput, {nullable:false})
    where!: ReferralWhereUniqueInput;
}
