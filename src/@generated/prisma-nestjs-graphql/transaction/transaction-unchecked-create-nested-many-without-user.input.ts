import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutUserInput } from './transaction-create-without-user.input';
import { TransactionCreateOrConnectWithoutUserInput } from './transaction-create-or-connect-without-user.input';
import { TransactionCreateManyUserInputEnvelope } from './transaction-create-many-user-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [TransactionCreateWithoutUserInput], {nullable:true})
    create?: Array<TransactionCreateWithoutUserInput>;

    @Field(() => [TransactionCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutUserInput>;

    @Field(() => TransactionCreateManyUserInputEnvelope, {nullable:true})
    createMany?: TransactionCreateManyUserInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    connect?: Array<TransactionWhereUniqueInput>;
}
