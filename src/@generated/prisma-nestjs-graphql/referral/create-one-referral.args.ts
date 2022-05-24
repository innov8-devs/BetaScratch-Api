import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferralCreateInput } from './referral-create.input';

@ArgsType()
export class CreateOneReferralArgs {

    @Field(() => ReferralCreateInput, {nullable:false})
    data!: ReferralCreateInput;
}
