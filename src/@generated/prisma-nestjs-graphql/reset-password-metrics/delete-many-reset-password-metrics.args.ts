import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordMetricsWhereInput } from './reset-password-metrics-where.input';

@ArgsType()
export class DeleteManyResetPasswordMetricsArgs {

    @Field(() => ResetPasswordMetricsWhereInput, {nullable:true})
    where?: ResetPasswordMetricsWhereInput;
}
