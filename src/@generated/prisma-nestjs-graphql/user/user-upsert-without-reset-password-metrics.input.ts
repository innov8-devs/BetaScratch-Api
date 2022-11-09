import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutResetPasswordMetricsInput } from './user-update-without-reset-password-metrics.input';
import { UserCreateWithoutResetPasswordMetricsInput } from './user-create-without-reset-password-metrics.input';

@InputType()
export class UserUpsertWithoutResetPasswordMetricsInput {

    @Field(() => UserUpdateWithoutResetPasswordMetricsInput, {nullable:false})
    update!: UserUpdateWithoutResetPasswordMetricsInput;

    @Field(() => UserCreateWithoutResetPasswordMetricsInput, {nullable:false})
    create!: UserCreateWithoutResetPasswordMetricsInput;
}
