import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWalletInput } from './user-create-without-wallet.input';
import { UserCreateOrConnectWithoutWalletInput } from './user-create-or-connect-without-wallet.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutWalletInput {

    @Field(() => UserCreateWithoutWalletInput, {nullable:true})
    create?: UserCreateWithoutWalletInput;

    @Field(() => UserCreateOrConnectWithoutWalletInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
