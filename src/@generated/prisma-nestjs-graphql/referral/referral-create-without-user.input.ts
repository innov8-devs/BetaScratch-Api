import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralCreatereferralsInput } from '../prisma/referral-createreferrals.input';

@InputType()
export class ReferralCreateWithoutUserInput {

    @Field(() => ReferralCreatereferralsInput, {nullable:true})
    referrals?: ReferralCreatereferralsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
