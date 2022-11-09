import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutResetPasswordMetricsInput } from './user-create-without-reset-password-metrics.input';
import { UserCreateOrConnectWithoutResetPasswordMetricsInput } from './user-create-or-connect-without-reset-password-metrics.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutResetPasswordMetricsInput {

    @Field(() => UserCreateWithoutResetPasswordMetricsInput, {nullable:true})
    create?: UserCreateWithoutResetPasswordMetricsInput;

    @Field(() => UserCreateOrConnectWithoutResetPasswordMetricsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutResetPasswordMetricsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
