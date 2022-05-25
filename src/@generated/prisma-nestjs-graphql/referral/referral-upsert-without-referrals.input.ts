import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralUpdateWithoutReferralsInput } from './referral-update-without-referrals.input';
import { ReferralCreateWithoutReferralsInput } from './referral-create-without-referrals.input';

@InputType()
export class ReferralUpsertWithoutReferralsInput {

    @Field(() => ReferralUpdateWithoutReferralsInput, {nullable:false})
    update!: ReferralUpdateWithoutReferralsInput;

    @Field(() => ReferralCreateWithoutReferralsInput, {nullable:false})
    create!: ReferralCreateWithoutReferralsInput;
}
