import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutTransactionsInput } from './user-create-without-transactions.input';

@InputType()
export class UserCreateOrConnectWithoutTransactionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTransactionsInput, {nullable:false})
    create!: UserCreateWithoutTransactionsInput;
}
