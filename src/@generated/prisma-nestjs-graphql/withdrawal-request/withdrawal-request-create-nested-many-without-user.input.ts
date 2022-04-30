import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalRequestCreateWithoutUserInput } from './withdrawal-request-create-without-user.input';
import { WithdrawalRequestCreateOrConnectWithoutUserInput } from './withdrawal-request-create-or-connect-without-user.input';
import { WithdrawalRequestCreateManyUserInputEnvelope } from './withdrawal-request-create-many-user-input-envelope.input';
import { WithdrawalRequestWhereUniqueInput } from './withdrawal-request-where-unique.input';

@InputType()
export class WithdrawalRequestCreateNestedManyWithoutUserInput {

    @Field(() => [WithdrawalRequestCreateWithoutUserInput], {nullable:true})
    create?: Array<WithdrawalRequestCreateWithoutUserInput>;

    @Field(() => [WithdrawalRequestCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<WithdrawalRequestCreateOrConnectWithoutUserInput>;

    @Field(() => WithdrawalRequestCreateManyUserInputEnvelope, {nullable:true})
    createMany?: WithdrawalRequestCreateManyUserInputEnvelope;

    @Field(() => [WithdrawalRequestWhereUniqueInput], {nullable:true})
    connect?: Array<WithdrawalRequestWhereUniqueInput>;
}
