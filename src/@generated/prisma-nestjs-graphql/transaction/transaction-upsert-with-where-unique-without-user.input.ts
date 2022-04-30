import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithoutUserInput } from './transaction-update-without-user.input';
import { TransactionCreateWithoutUserInput } from './transaction-create-without-user.input';

@InputType()
export class TransactionUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutUserInput, {nullable:false})
    update!: TransactionUpdateWithoutUserInput;

    @Field(() => TransactionCreateWithoutUserInput, {nullable:false})
    create!: TransactionCreateWithoutUserInput;
}
