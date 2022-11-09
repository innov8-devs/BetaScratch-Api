import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResetPasswordMetricsWhereUniqueInput } from './reset-password-metrics-where-unique.input';
import { ResetPasswordMetricsUncheckedCreateWithoutUserInput } from './reset-password-metrics-unchecked-create-without-user.input';

@InputType()
export class ResetPasswordMetricsCreateOrConnectWithoutUserInput {

    @Field(() => ResetPasswordMetricsWhereUniqueInput, {nullable:false})
    where!: ResetPasswordMetricsWhereUniqueInput;

    @Field(() => ResetPasswordMetricsUncheckedCreateWithoutUserInput, {nullable:false})
    create!: ResetPasswordMetricsUncheckedCreateWithoutUserInput;
}
