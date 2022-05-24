import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';
import { ReferralUpdateWithoutUserInput } from './referral-update-without-user.input';

@InputType()
export class ReferralUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReferralWhereUniqueInput, {nullable:false})
    where!: ReferralWhereUniqueInput;

    @Field(() => ReferralUpdateWithoutUserInput, {nullable:false})
    data!: ReferralUpdateWithoutUserInput;
}
