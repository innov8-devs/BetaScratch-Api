import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalRequestCreateInput } from './withdrawal-request-create.input';

@ArgsType()
export class CreateOneWithdrawalRequestArgs {

    @Field(() => WithdrawalRequestCreateInput, {nullable:false})
    data!: WithdrawalRequestCreateInput;
}
