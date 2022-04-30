import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutWalletInput } from './user-update-without-wallet.input';
import { UserCreateWithoutWalletInput } from './user-create-without-wallet.input';

@InputType()
export class UserUpsertWithoutWalletInput {

    @Field(() => UserUpdateWithoutWalletInput, {nullable:false})
    update!: UserUpdateWithoutWalletInput;

    @Field(() => UserCreateWithoutWalletInput, {nullable:false})
    create!: UserCreateWithoutWalletInput;
}
