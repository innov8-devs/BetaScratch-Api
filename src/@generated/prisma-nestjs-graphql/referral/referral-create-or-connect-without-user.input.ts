import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';
import { ReferralCreateWithoutUserInput } from './referral-create-without-user.input';

@InputType()
export class ReferralCreateOrConnectWithoutUserInput {

    @Field(() => ReferralWhereUniqueInput, {nullable:false})
    where!: ReferralWhereUniqueInput;

    @Field(() => ReferralCreateWithoutUserInput, {nullable:false})
    create!: ReferralCreateWithoutUserInput;
}
