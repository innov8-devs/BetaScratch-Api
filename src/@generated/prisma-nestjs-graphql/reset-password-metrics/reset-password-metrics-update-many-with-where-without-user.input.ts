import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResetPasswordMetricsScalarWhereInput } from './reset-password-metrics-scalar-where.input';
import { ResetPasswordMetricsUpdateManyMutationInput } from './reset-password-metrics-update-many-mutation.input';

@InputType()
export class ResetPasswordMetricsUpdateManyWithWhereWithoutUserInput {

    @Field(() => ResetPasswordMetricsScalarWhereInput, {nullable:false})
    where!: ResetPasswordMetricsScalarWhereInput;

    @Field(() => ResetPasswordMetricsUpdateManyMutationInput, {nullable:false})
    data!: ResetPasswordMetricsUpdateManyMutationInput;
}
