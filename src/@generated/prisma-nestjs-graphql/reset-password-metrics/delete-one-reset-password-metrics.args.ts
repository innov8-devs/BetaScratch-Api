import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordMetricsWhereUniqueInput } from './reset-password-metrics-where-unique.input';

@ArgsType()
export class DeleteOneResetPasswordMetricsArgs {

    @Field(() => ResetPasswordMetricsWhereUniqueInput, {nullable:false})
    where!: ResetPasswordMetricsWhereUniqueInput;
}
