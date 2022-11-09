import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneWithoutResetPasswordMetricsNestedInput } from '../user/user-update-one-without-reset-password-metrics-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ResetPasswordMetricsUpdateInput {

    @Field(() => UserUpdateOneWithoutResetPasswordMetricsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutResetPasswordMetricsNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
