import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResetPasswordMetricsWhereUniqueInput } from './reset-password-metrics-where-unique.input';
import { ResetPasswordMetricsUpdateWithoutUserInput } from './reset-password-metrics-update-without-user.input';
import { ResetPasswordMetricsUncheckedCreateWithoutUserInput } from './reset-password-metrics-unchecked-create-without-user.input';

@InputType()
export class ResetPasswordMetricsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ResetPasswordMetricsWhereUniqueInput, {nullable:false})
    where!: ResetPasswordMetricsWhereUniqueInput;

    @Field(() => ResetPasswordMetricsUpdateWithoutUserInput, {nullable:false})
    update!: ResetPasswordMetricsUpdateWithoutUserInput;

    @Field(() => ResetPasswordMetricsUncheckedCreateWithoutUserInput, {nullable:false})
    create!: ResetPasswordMetricsUncheckedCreateWithoutUserInput;
}
