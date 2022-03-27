import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTransactionsInput } from './user-create-without-transactions.input';
import { UserCreateOrConnectWithoutTransactionsInput } from './user-create-or-connect-without-transactions.input';
import { UserUpsertWithoutTransactionsInput } from './user-upsert-without-transactions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTransactionsInput } from './user-update-without-transactions.input';

@InputType()
export class UserUpdateOneWithoutTransactionsInput {

    @Field(() => UserCreateWithoutTransactionsInput, {nullable:true})
    create?: UserCreateWithoutTransactionsInput;

    @Field(() => UserCreateOrConnectWithoutTransactionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput;

    @Field(() => UserUpsertWithoutTransactionsInput, {nullable:true})
    upsert?: UserUpsertWithoutTransactionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTransactionsInput, {nullable:true})
    update?: UserUpdateWithoutTransactionsInput;
}
