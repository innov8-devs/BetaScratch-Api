import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionCreateWithoutUserInput } from './transaction-create-without-user.input';

@InputType()
export class TransactionCreateOrConnectWithoutUserInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionCreateWithoutUserInput, {nullable:false})
    create!: TransactionCreateWithoutUserInput;
}
