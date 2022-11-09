import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutResetPasswordMetricsInput } from './user-create-without-reset-password-metrics.input';

@InputType()
export class UserCreateOrConnectWithoutResetPasswordMetricsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutResetPasswordMetricsInput, {nullable:false})
    create!: UserCreateWithoutResetPasswordMetricsInput;
}
