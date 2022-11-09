import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutResetPasswordMetricsInput } from '../user/user-create-nested-one-without-reset-password-metrics.input';

@InputType()
export class ResetPasswordMetricsCreateInput {

    @Field(() => UserCreateNestedOneWithoutResetPasswordMetricsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutResetPasswordMetricsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
