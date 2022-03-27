import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTransactionsInput } from './user-create-without-transactions.input';
import { UserCreateOrConnectWithoutTransactionsInput } from './user-create-or-connect-without-transactions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTransactionsInput {

    @Field(() => UserCreateWithoutTransactionsInput, {nullable:true})
    create?: UserCreateWithoutTransactionsInput;

    @Field(() => UserCreateOrConnectWithoutTransactionsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
