import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordMetricsWhereUniqueInput } from './reset-password-metrics-where-unique.input';
import { ResetPasswordMetricsCreateInput } from './reset-password-metrics-create.input';
import { ResetPasswordMetricsUpdateInput } from './reset-password-metrics-update.input';

@ArgsType()
export class UpsertOneResetPasswordMetricsArgs {

    @Field(() => ResetPasswordMetricsWhereUniqueInput, {nullable:false})
    where!: ResetPasswordMetricsWhereUniqueInput;

    @Field(() => ResetPasswordMetricsCreateInput, {nullable:false})
    create!: ResetPasswordMetricsCreateInput;

    @Field(() => ResetPasswordMetricsUpdateInput, {nullable:false})
    update!: ResetPasswordMetricsUpdateInput;
}
