import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalRequestUpdateManyMutationInput } from './withdrawal-request-update-many-mutation.input';
import { WithdrawalRequestWhereInput } from './withdrawal-request-where.input';

@ArgsType()
export class UpdateManyWithdrawalRequestArgs {

    @Field(() => WithdrawalRequestUpdateManyMutationInput, {nullable:false})
    data!: WithdrawalRequestUpdateManyMutationInput;

    @Field(() => WithdrawalRequestWhereInput, {nullable:true})
    where?: WithdrawalRequestWhereInput;
}
