import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalRequestScalarWhereInput } from './withdrawal-request-scalar-where.input';
import { WithdrawalRequestUpdateManyMutationInput } from './withdrawal-request-update-many-mutation.input';

@InputType()
export class WithdrawalRequestUpdateManyWithWhereWithoutUserInput {

    @Field(() => WithdrawalRequestScalarWhereInput, {nullable:false})
    where!: WithdrawalRequestScalarWhereInput;

    @Field(() => WithdrawalRequestUpdateManyMutationInput, {nullable:false})
    data!: WithdrawalRequestUpdateManyMutationInput;
}
