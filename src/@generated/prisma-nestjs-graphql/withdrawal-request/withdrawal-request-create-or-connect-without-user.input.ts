import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalRequestWhereUniqueInput } from './withdrawal-request-where-unique.input';
import { WithdrawalRequestCreateWithoutUserInput } from './withdrawal-request-create-without-user.input';

@InputType()
export class WithdrawalRequestCreateOrConnectWithoutUserInput {

    @Field(() => WithdrawalRequestWhereUniqueInput, {nullable:false})
    where!: WithdrawalRequestWhereUniqueInput;

    @Field(() => WithdrawalRequestCreateWithoutUserInput, {nullable:false})
    create!: WithdrawalRequestCreateWithoutUserInput;
}
