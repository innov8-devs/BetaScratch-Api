import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWithdrawalRequestInput } from './user-create-without-withdrawal-request.input';
import { UserCreateOrConnectWithoutWithdrawalRequestInput } from './user-create-or-connect-without-withdrawal-request.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutWithdrawalRequestInput {

    @Field(() => UserCreateWithoutWithdrawalRequestInput, {nullable:true})
    create?: UserCreateWithoutWithdrawalRequestInput;

    @Field(() => UserCreateOrConnectWithoutWithdrawalRequestInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalRequestInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
