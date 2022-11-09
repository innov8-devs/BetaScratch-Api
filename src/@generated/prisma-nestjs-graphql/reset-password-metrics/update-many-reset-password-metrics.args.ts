import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordMetricsUncheckedUpdateManyInput } from './reset-password-metrics-unchecked-update-many.input';
import { ResetPasswordMetricsWhereInput } from './reset-password-metrics-where.input';

@ArgsType()
export class UpdateManyResetPasswordMetricsArgs {

    @Field(() => ResetPasswordMetricsUncheckedUpdateManyInput, {nullable:false})
    data!: ResetPasswordMetricsUncheckedUpdateManyInput;

    @Field(() => ResetPasswordMetricsWhereInput, {nullable:true})
    where?: ResetPasswordMetricsWhereInput;
}
