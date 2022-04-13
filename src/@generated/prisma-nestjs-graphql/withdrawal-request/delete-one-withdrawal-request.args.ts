import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalRequestWhereUniqueInput } from './withdrawal-request-where-unique.input';

@ArgsType()
export class DeleteOneWithdrawalRequestArgs {

    @Field(() => WithdrawalRequestWhereUniqueInput, {nullable:false})
    where!: WithdrawalRequestWhereUniqueInput;
}
