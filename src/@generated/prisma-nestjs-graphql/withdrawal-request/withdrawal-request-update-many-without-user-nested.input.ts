import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalRequestCreateWithoutUserInput } from './withdrawal-request-create-without-user.input';
import { WithdrawalRequestCreateOrConnectWithoutUserInput } from './withdrawal-request-create-or-connect-without-user.input';
import { WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput } from './withdrawal-request-upsert-with-where-unique-without-user.input';
import { WithdrawalRequestCreateManyUserInputEnvelope } from './withdrawal-request-create-many-user-input-envelope.input';
import { WithdrawalRequestWhereUniqueInput } from './withdrawal-request-where-unique.input';
import { WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput } from './withdrawal-request-update-with-where-unique-without-user.input';
import { WithdrawalRequestUpdateManyWithWhereWithoutUserInput } from './withdrawal-request-update-many-with-where-without-user.input';
import { WithdrawalRequestScalarWhereInput } from './withdrawal-request-scalar-where.input';

@InputType()
export class WithdrawalRequestUpdateManyWithoutUserNestedInput {

    @Field(() => [WithdrawalRequestCreateWithoutUserInput], {nullable:true})
    create?: Array<WithdrawalRequestCreateWithoutUserInput>;

    @Field(() => [WithdrawalRequestCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<WithdrawalRequestCreateOrConnectWithoutUserInput>;

    @Field(() => [WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => WithdrawalRequestCreateManyUserInputEnvelope, {nullable:true})
    createMany?: WithdrawalRequestCreateManyUserInputEnvelope;

    @Field(() => [WithdrawalRequestWhereUniqueInput], {nullable:true})
    set?: Array<WithdrawalRequestWhereUniqueInput>;

    @Field(() => [WithdrawalRequestWhereUniqueInput], {nullable:true})
    disconnect?: Array<WithdrawalRequestWhereUniqueInput>;

    @Field(() => [WithdrawalRequestWhereUniqueInput], {nullable:true})
    delete?: Array<WithdrawalRequestWhereUniqueInput>;

    @Field(() => [WithdrawalRequestWhereUniqueInput], {nullable:true})
    connect?: Array<WithdrawalRequestWhereUniqueInput>;

    @Field(() => [WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [WithdrawalRequestUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<WithdrawalRequestUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [WithdrawalRequestScalarWhereInput], {nullable:true})
    deleteMany?: Array<WithdrawalRequestScalarWhereInput>;
}
