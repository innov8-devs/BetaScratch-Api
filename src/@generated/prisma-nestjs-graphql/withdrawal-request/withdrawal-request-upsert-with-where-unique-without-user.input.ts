import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalRequestWhereUniqueInput } from './withdrawal-request-where-unique.input';
import { WithdrawalRequestUpdateWithoutUserInput } from './withdrawal-request-update-without-user.input';
import { WithdrawalRequestCreateWithoutUserInput } from './withdrawal-request-create-without-user.input';

@InputType()
export class WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => WithdrawalRequestWhereUniqueInput, {nullable:false})
    where!: WithdrawalRequestWhereUniqueInput;

    @Field(() => WithdrawalRequestUpdateWithoutUserInput, {nullable:false})
    update!: WithdrawalRequestUpdateWithoutUserInput;

    @Field(() => WithdrawalRequestCreateWithoutUserInput, {nullable:false})
    create!: WithdrawalRequestCreateWithoutUserInput;
}
