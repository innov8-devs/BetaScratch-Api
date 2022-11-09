import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResetPasswordMetricsWhereUniqueInput } from './reset-password-metrics-where-unique.input';
import { ResetPasswordMetricsUpdateWithoutUserInput } from './reset-password-metrics-update-without-user.input';
import { ResetPasswordMetricsCreateWithoutUserInput } from './reset-password-metrics-create-without-user.input';

@InputType()
export class ResetPasswordMetricsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ResetPasswordMetricsWhereUniqueInput, {nullable:false})
    where!: ResetPasswordMetricsWhereUniqueInput;

    @Field(() => ResetPasswordMetricsUpdateWithoutUserInput, {nullable:false})
    update!: ResetPasswordMetricsUpdateWithoutUserInput;

    @Field(() => ResetPasswordMetricsCreateWithoutUserInput, {nullable:false})
    create!: ResetPasswordMetricsCreateWithoutUserInput;
}
