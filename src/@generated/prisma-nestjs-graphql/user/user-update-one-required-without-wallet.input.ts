import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWalletInput } from './user-create-without-wallet.input';
import { UserCreateOrConnectWithoutWalletInput } from './user-create-or-connect-without-wallet.input';
import { UserUpsertWithoutWalletInput } from './user-upsert-without-wallet.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutWalletInput } from './user-update-without-wallet.input';

@InputType()
export class UserUpdateOneRequiredWithoutWalletInput {

    @Field(() => UserCreateWithoutWalletInput, {nullable:true})
    create?: UserCreateWithoutWalletInput;

    @Field(() => UserCreateOrConnectWithoutWalletInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput;

    @Field(() => UserUpsertWithoutWalletInput, {nullable:true})
    upsert?: UserUpsertWithoutWalletInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutWalletInput, {nullable:true})
    update?: UserUpdateWithoutWalletInput;
}
