import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutWalletInput } from './user-create-without-wallet.input';

@InputType()
export class UserCreateOrConnectWithoutWalletInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutWalletInput, {nullable:false})
    create!: UserCreateWithoutWalletInput;
}
