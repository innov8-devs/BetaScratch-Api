import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralScalarWhereInput } from './referral-scalar-where.input';
import { ReferralUpdateManyMutationInput } from './referral-update-many-mutation.input';

@InputType()
export class ReferralUpdateManyWithWhereWithoutUserInput {

    @Field(() => ReferralScalarWhereInput, {nullable:false})
    where!: ReferralScalarWhereInput;

    @Field(() => ReferralUpdateManyMutationInput, {nullable:false})
    data!: ReferralUpdateManyMutationInput;
}
