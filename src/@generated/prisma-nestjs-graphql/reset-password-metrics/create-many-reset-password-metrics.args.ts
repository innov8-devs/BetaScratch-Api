import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordMetricsCreateManyInput } from './reset-password-metrics-create-many.input';

@ArgsType()
export class CreateManyResetPasswordMetricsArgs {

    @Field(() => [ResetPasswordMetricsCreateManyInput], {nullable:false})
    data!: Array<ResetPasswordMetricsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
