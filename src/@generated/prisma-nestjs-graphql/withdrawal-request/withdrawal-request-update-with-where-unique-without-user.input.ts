import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalRequestWhereUniqueInput } from './withdrawal-request-where-unique.input';
import { WithdrawalRequestUpdateWithoutUserInput } from './withdrawal-request-update-without-user.input';

@InputType()
export class WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => WithdrawalRequestWhereUniqueInput, {nullable:false})
    where!: WithdrawalRequestWhereUniqueInput;

    @Field(() => WithdrawalRequestUpdateWithoutUserInput, {nullable:false})
    data!: WithdrawalRequestUpdateWithoutUserInput;
}
