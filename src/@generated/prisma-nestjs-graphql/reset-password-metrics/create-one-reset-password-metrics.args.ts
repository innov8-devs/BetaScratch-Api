import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordMetricsCreateInput } from './reset-password-metrics-create.input';

@ArgsType()
export class CreateOneResetPasswordMetricsArgs {

    @Field(() => ResetPasswordMetricsCreateInput, {nullable:false})
    data!: ResetPasswordMetricsCreateInput;
}
