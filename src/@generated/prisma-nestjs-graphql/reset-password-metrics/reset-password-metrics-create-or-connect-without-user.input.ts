import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResetPasswordMetricsWhereUniqueInput } from './reset-password-metrics-where-unique.input';
import { ResetPasswordMetricsCreateWithoutUserInput } from './reset-password-metrics-create-without-user.input';

@InputType()
export class ResetPasswordMetricsCreateOrConnectWithoutUserInput {

    @Field(() => ResetPasswordMetricsWhereUniqueInput, {nullable:false})
    where!: ResetPasswordMetricsWhereUniqueInput;

    @Field(() => ResetPasswordMetricsCreateWithoutUserInput, {nullable:false})
    create!: ResetPasswordMetricsCreateWithoutUserInput;
}
