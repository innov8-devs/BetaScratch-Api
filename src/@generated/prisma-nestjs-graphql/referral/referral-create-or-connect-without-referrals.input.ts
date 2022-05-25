import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';
import { ReferralCreateWithoutReferralsInput } from './referral-create-without-referrals.input';

@InputType()
export class ReferralCreateOrConnectWithoutReferralsInput {

    @Field(() => ReferralWhereUniqueInput, {nullable:false})
    where!: ReferralWhereUniqueInput;

    @Field(() => ReferralCreateWithoutReferralsInput, {nullable:false})
    create!: ReferralCreateWithoutReferralsInput;
}
