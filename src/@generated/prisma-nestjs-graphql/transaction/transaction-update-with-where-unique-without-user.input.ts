import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithoutUserInput } from './transaction-update-without-user.input';

@InputType()
export class TransactionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutUserInput, {nullable:false})
    data!: TransactionUpdateWithoutUserInput;
}
