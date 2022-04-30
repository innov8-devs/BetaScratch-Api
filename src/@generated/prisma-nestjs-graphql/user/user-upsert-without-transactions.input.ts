import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTransactionsInput } from './user-update-without-transactions.input';
import { UserCreateWithoutTransactionsInput } from './user-create-without-transactions.input';

@InputType()
export class UserUpsertWithoutTransactionsInput {

    @Field(() => UserUpdateWithoutTransactionsInput, {nullable:false})
    update!: UserUpdateWithoutTransactionsInput;

    @Field(() => UserCreateWithoutTransactionsInput, {nullable:false})
    create!: UserCreateWithoutTransactionsInput;
}
