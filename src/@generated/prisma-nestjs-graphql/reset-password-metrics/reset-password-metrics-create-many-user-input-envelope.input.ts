import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResetPasswordMetricsCreateManyUserInput } from './reset-password-metrics-create-many-user.input';

@InputType()
export class ResetPasswordMetricsCreateManyUserInputEnvelope {

    @Field(() => [ResetPasswordMetricsCreateManyUserInput], {nullable:false})
    data!: Array<ResetPasswordMetricsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
