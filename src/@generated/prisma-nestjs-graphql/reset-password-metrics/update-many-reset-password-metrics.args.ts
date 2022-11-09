import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordMetricsUpdateManyMutationInput } from './reset-password-metrics-update-many-mutation.input';
import { ResetPasswordMetricsWhereInput } from './reset-password-metrics-where.input';

@ArgsType()
export class UpdateManyResetPasswordMetricsArgs {

    @Field(() => ResetPasswordMetricsUpdateManyMutationInput, {nullable:false})
    data!: ResetPasswordMetricsUpdateManyMutationInput;

    @Field(() => ResetPasswordMetricsWhereInput, {nullable:true})
    where?: ResetPasswordMetricsWhereInput;
}
