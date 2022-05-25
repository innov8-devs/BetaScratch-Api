import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralCreateWithoutReferralsInput } from './referral-create-without-referrals.input';
import { ReferralCreateOrConnectWithoutReferralsInput } from './referral-create-or-connect-without-referrals.input';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';

@InputType()
export class ReferralCreateNestedOneWithoutReferralsInput {

    @Field(() => ReferralCreateWithoutReferralsInput, {nullable:true})
    create?: ReferralCreateWithoutReferralsInput;

    @Field(() => ReferralCreateOrConnectWithoutReferralsInput, {nullable:true})
    connectOrCreate?: ReferralCreateOrConnectWithoutReferralsInput;

    @Field(() => ReferralWhereUniqueInput, {nullable:true})
    connect?: ReferralWhereUniqueInput;
}
