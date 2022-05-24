import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReferralCreatereferralsInput } from '../prisma/referral-createreferrals.input';

@InputType()
export class ReferralUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ReferralCreatereferralsInput, {nullable:true})
    referrals?: ReferralCreatereferralsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
