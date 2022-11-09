import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneWithoutResetPasswordMetricsNestedInput } from '../user/user-update-one-without-reset-password-metrics-nested.input';

@InputType()
export class ResetPasswordMetricsUpdateInput {

    @Field(() => UserUpdateOneWithoutResetPasswordMetricsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutResetPasswordMetricsNestedInput;
}
