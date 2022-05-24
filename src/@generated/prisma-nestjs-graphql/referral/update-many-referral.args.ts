import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferralUpdateManyMutationInput } from './referral-update-many-mutation.input';
import { ReferralWhereInput } from './referral-where.input';

@ArgsType()
export class UpdateManyReferralArgs {

    @Field(() => ReferralUpdateManyMutationInput, {nullable:false})
    data!: ReferralUpdateManyMutationInput;

    @Field(() => ReferralWhereInput, {nullable:true})
    where?: ReferralWhereInput;
}
