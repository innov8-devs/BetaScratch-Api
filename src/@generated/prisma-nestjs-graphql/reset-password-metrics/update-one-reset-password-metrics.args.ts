import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordMetricsUpdateInput } from './reset-password-metrics-update.input';
import { ResetPasswordMetricsWhereUniqueInput } from './reset-password-metrics-where-unique.input';

@ArgsType()
export class UpdateOneResetPasswordMetricsArgs {

    @Field(() => ResetPasswordMetricsUpdateInput, {nullable:false})
    data!: ResetPasswordMetricsUpdateInput;

    @Field(() => ResetPasswordMetricsWhereUniqueInput, {nullable:false})
    where!: ResetPasswordMetricsWhereUniqueInput;
}
