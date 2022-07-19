import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutUserInput } from './transaction-create-without-user.input';
import { TransactionCreateOrConnectWithoutUserInput } from './transaction-create-or-connect-without-user.input';
import { TransactionUpsertWithWhereUniqueWithoutUserInput } from './transaction-upsert-with-where-unique-without-user.input';
import { TransactionCreateManyUserInputEnvelope } from './transaction-create-many-user-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutUserInput } from './transaction-update-with-where-unique-without-user.input';
import { TransactionUpdateManyWithWhereWithoutUserInput } from './transaction-update-many-with-where-without-user.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUpdateManyWithoutUserNestedInput {

    @Field(() => [TransactionCreateWithoutUserInput], {nullable:true})
    create?: Array<TransactionCreateWithoutUserInput>;

    @Field(() => [TransactionCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutUserInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => TransactionCreateManyUserInputEnvelope, {nullable:true})
    createMany?: TransactionCreateManyUserInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    set?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    disconnect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    delete?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    connect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<TransactionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    deleteMany?: Array<TransactionScalarWhereInput>;
}
