import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordMetricsWhereUniqueInput } from './reset-password-metrics-where-unique.input';

@ArgsType()
export class FindUniqueResetPasswordMetricsArgs {

    @Field(() => ResetPasswordMetricsWhereUniqueInput, {nullable:false})
    where!: ResetPasswordMetricsWhereUniqueInput;
}
