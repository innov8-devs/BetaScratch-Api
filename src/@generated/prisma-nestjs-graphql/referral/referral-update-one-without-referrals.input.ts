import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralCreateWithoutReferralsInput } from './referral-create-without-referrals.input';
import { ReferralCreateOrConnectWithoutReferralsInput } from './referral-create-or-connect-without-referrals.input';
import { ReferralUpsertWithoutReferralsInput } from './referral-upsert-without-referrals.input';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';
import { ReferralUpdateWithoutReferralsInput } from './referral-update-without-referrals.input';

@InputType()
export class ReferralUpdateOneWithoutReferralsInput {

    @Field(() => ReferralCreateWithoutReferralsInput, {nullable:true})
    create?: ReferralCreateWithoutReferralsInput;

    @Field(() => ReferralCreateOrConnectWithoutReferralsInput, {nullable:true})
    connectOrCreate?: ReferralCreateOrConnectWithoutReferralsInput;

    @Field(() => ReferralUpsertWithoutReferralsInput, {nullable:true})
    upsert?: ReferralUpsertWithoutReferralsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ReferralWhereUniqueInput, {nullable:true})
    connect?: ReferralWhereUniqueInput;

    @Field(() => ReferralUpdateWithoutReferralsInput, {nullable:true})
    update?: ReferralUpdateWithoutReferralsInput;
}
