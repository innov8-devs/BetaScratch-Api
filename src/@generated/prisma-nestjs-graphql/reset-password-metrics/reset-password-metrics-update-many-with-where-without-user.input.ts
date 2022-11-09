import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResetPasswordMetricsScalarWhereInput } from './reset-password-metrics-scalar-where.input';
import { ResetPasswordMetricsUncheckedUpdateManyWithoutResetPasswordMetricsInput } from './reset-password-metrics-unchecked-update-many-without-reset-password-metrics.input';

@InputType()
export class ResetPasswordMetricsUpdateManyWithWhereWithoutUserInput {

    @Field(() => ResetPasswordMetricsScalarWhereInput, {nullable:false})
    where!: ResetPasswordMetricsScalarWhereInput;

    @Field(() => ResetPasswordMetricsUncheckedUpdateManyWithoutResetPasswordMetricsInput, {nullable:false})
    data!: ResetPasswordMetricsUncheckedUpdateManyWithoutResetPasswordMetricsInput;
}
