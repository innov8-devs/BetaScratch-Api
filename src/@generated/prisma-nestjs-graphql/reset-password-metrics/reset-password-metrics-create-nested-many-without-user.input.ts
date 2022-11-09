import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResetPasswordMetricsCreateWithoutUserInput } from './reset-password-metrics-create-without-user.input';
import { ResetPasswordMetricsCreateOrConnectWithoutUserInput } from './reset-password-metrics-create-or-connect-without-user.input';
import { ResetPasswordMetricsCreateManyUserInputEnvelope } from './reset-password-metrics-create-many-user-input-envelope.input';
import { ResetPasswordMetricsWhereUniqueInput } from './reset-password-metrics-where-unique.input';

@InputType()
export class ResetPasswordMetricsCreateNestedManyWithoutUserInput {

    @Field(() => [ResetPasswordMetricsCreateWithoutUserInput], {nullable:true})
    create?: Array<ResetPasswordMetricsCreateWithoutUserInput>;

    @Field(() => [ResetPasswordMetricsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ResetPasswordMetricsCreateOrConnectWithoutUserInput>;

    @Field(() => ResetPasswordMetricsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ResetPasswordMetricsCreateManyUserInputEnvelope;

    @Field(() => [ResetPasswordMetricsWhereUniqueInput], {nullable:true})
    connect?: Array<ResetPasswordMetricsWhereUniqueInput>;
}
