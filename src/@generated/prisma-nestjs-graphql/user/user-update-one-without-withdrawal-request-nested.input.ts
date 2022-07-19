import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWithdrawalRequestInput } from './user-create-without-withdrawal-request.input';
import { UserCreateOrConnectWithoutWithdrawalRequestInput } from './user-create-or-connect-without-withdrawal-request.input';
import { UserUpsertWithoutWithdrawalRequestInput } from './user-upsert-without-withdrawal-request.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutWithdrawalRequestInput } from './user-update-without-withdrawal-request.input';

@InputType()
export class UserUpdateOneWithoutWithdrawalRequestNestedInput {

    @Field(() => UserCreateWithoutWithdrawalRequestInput, {nullable:true})
    create?: UserCreateWithoutWithdrawalRequestInput;

    @Field(() => UserCreateOrConnectWithoutWithdrawalRequestInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalRequestInput;

    @Field(() => UserUpsertWithoutWithdrawalRequestInput, {nullable:true})
    upsert?: UserUpsertWithoutWithdrawalRequestInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutWithdrawalRequestInput, {nullable:true})
    update?: UserUpdateWithoutWithdrawalRequestInput;
}
