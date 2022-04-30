import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalRequestUpdateInput } from './withdrawal-request-update.input';
import { WithdrawalRequestWhereUniqueInput } from './withdrawal-request-where-unique.input';

@ArgsType()
export class UpdateOneWithdrawalRequestArgs {

    @Field(() => WithdrawalRequestUpdateInput, {nullable:false})
    data!: WithdrawalRequestUpdateInput;

    @Field(() => WithdrawalRequestWhereUniqueInput, {nullable:false})
    where!: WithdrawalRequestWhereUniqueInput;
}
