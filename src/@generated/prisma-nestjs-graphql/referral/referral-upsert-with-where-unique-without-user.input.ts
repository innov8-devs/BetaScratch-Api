import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';
import { ReferralUpdateWithoutUserInput } from './referral-update-without-user.input';
import { ReferralCreateWithoutUserInput } from './referral-create-without-user.input';

@InputType()
export class ReferralUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ReferralWhereUniqueInput, {nullable:false})
    where!: ReferralWhereUniqueInput;

    @Field(() => ReferralUpdateWithoutUserInput, {nullable:false})
    update!: ReferralUpdateWithoutUserInput;

    @Field(() => ReferralCreateWithoutUserInput, {nullable:false})
    create!: ReferralCreateWithoutUserInput;
}
