import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutResetPasswordMetricsInput } from './user-create-without-reset-password-metrics.input';
import { UserCreateOrConnectWithoutResetPasswordMetricsInput } from './user-create-or-connect-without-reset-password-metrics.input';
import { UserUpsertWithoutResetPasswordMetricsInput } from './user-upsert-without-reset-password-metrics.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutResetPasswordMetricsInput } from './user-update-without-reset-password-metrics.input';

@InputType()
export class UserUpdateOneWithoutResetPasswordMetricsNestedInput {

    @Field(() => UserCreateWithoutResetPasswordMetricsInput, {nullable:true})
    create?: UserCreateWithoutResetPasswordMetricsInput;

    @Field(() => UserCreateOrConnectWithoutResetPasswordMetricsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutResetPasswordMetricsInput;

    @Field(() => UserUpsertWithoutResetPasswordMetricsInput, {nullable:true})
    upsert?: UserUpsertWithoutResetPasswordMetricsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutResetPasswordMetricsInput, {nullable:true})
    update?: UserUpdateWithoutResetPasswordMetricsInput;
}
