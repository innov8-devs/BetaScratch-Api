import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResetPasswordMetricsCreateWithoutUserInput } from './reset-password-metrics-create-without-user.input';
import { ResetPasswordMetricsCreateOrConnectWithoutUserInput } from './reset-password-metrics-create-or-connect-without-user.input';
import { ResetPasswordMetricsUpsertWithWhereUniqueWithoutUserInput } from './reset-password-metrics-upsert-with-where-unique-without-user.input';
import { ResetPasswordMetricsCreateManyUserInputEnvelope } from './reset-password-metrics-create-many-user-input-envelope.input';
import { ResetPasswordMetricsWhereUniqueInput } from './reset-password-metrics-where-unique.input';
import { ResetPasswordMetricsUpdateWithWhereUniqueWithoutUserInput } from './reset-password-metrics-update-with-where-unique-without-user.input';
import { ResetPasswordMetricsUpdateManyWithWhereWithoutUserInput } from './reset-password-metrics-update-many-with-where-without-user.input';
import { ResetPasswordMetricsScalarWhereInput } from './reset-password-metrics-scalar-where.input';

@InputType()
export class ResetPasswordMetricsUpdateManyWithoutUserNestedInput {

    @Field(() => [ResetPasswordMetricsCreateWithoutUserInput], {nullable:true})
    create?: Array<ResetPasswordMetricsCreateWithoutUserInput>;

    @Field(() => [ResetPasswordMetricsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ResetPasswordMetricsCreateOrConnectWithoutUserInput>;

    @Field(() => [ResetPasswordMetricsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ResetPasswordMetricsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ResetPasswordMetricsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ResetPasswordMetricsCreateManyUserInputEnvelope;

    @Field(() => [ResetPasswordMetricsWhereUniqueInput], {nullable:true})
    set?: Array<ResetPasswordMetricsWhereUniqueInput>;

    @Field(() => [ResetPasswordMetricsWhereUniqueInput], {nullable:true})
    disconnect?: Array<ResetPasswordMetricsWhereUniqueInput>;

    @Field(() => [ResetPasswordMetricsWhereUniqueInput], {nullable:true})
    delete?: Array<ResetPasswordMetricsWhereUniqueInput>;

    @Field(() => [ResetPasswordMetricsWhereUniqueInput], {nullable:true})
    connect?: Array<ResetPasswordMetricsWhereUniqueInput>;

    @Field(() => [ResetPasswordMetricsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ResetPasswordMetricsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ResetPasswordMetricsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ResetPasswordMetricsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ResetPasswordMetricsScalarWhereInput], {nullable:true})
    deleteMany?: Array<ResetPasswordMetricsScalarWhereInput>;
}
