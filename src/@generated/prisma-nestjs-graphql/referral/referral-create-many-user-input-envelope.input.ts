import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralCreateManyUserInput } from './referral-create-many-user.input';

@InputType()
export class ReferralCreateManyUserInputEnvelope {

    @Field(() => [ReferralCreateManyUserInput], {nullable:false})
    data!: Array<ReferralCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
