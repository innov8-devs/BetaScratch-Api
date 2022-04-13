import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalRequestWhereUniqueInput } from './withdrawal-request-where-unique.input';
import { WithdrawalRequestCreateInput } from './withdrawal-request-create.input';
import { WithdrawalRequestUpdateInput } from './withdrawal-request-update.input';

@ArgsType()
export class UpsertOneWithdrawalRequestArgs {

    @Field(() => WithdrawalRequestWhereUniqueInput, {nullable:false})
    where!: WithdrawalRequestWhereUniqueInput;

    @Field(() => WithdrawalRequestCreateInput, {nullable:false})
    create!: WithdrawalRequestCreateInput;

    @Field(() => WithdrawalRequestUpdateInput, {nullable:false})
    update!: WithdrawalRequestUpdateInput;
}
