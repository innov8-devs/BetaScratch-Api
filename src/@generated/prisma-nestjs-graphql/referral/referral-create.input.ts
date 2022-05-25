import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralCreatereferralsInput } from '../prisma/referral-createreferrals.input';
import { UserCreateNestedOneWithoutReferralInput } from '../user/user-create-nested-one-without-referral.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class ReferralCreateInput {

    @Field(() => ReferralCreatereferralsInput, {nullable:true})
    referrals?: ReferralCreatereferralsInput;

    @Field(() => UserCreateNestedOneWithoutReferralInput, {nullable:false})
    user!: UserCreateNestedOneWithoutReferralInput;

    @Field(() => Int, {nullable:true})
    invitesFunded?: number;

    @Field(() => Int, {nullable:true})
    totalEarned?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
