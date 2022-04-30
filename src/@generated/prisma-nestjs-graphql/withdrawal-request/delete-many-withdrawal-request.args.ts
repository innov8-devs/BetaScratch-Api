import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalRequestWhereInput } from './withdrawal-request-where.input';

@ArgsType()
export class DeleteManyWithdrawalRequestArgs {

    @Field(() => WithdrawalRequestWhereInput, {nullable:true})
    where?: WithdrawalRequestWhereInput;
}
