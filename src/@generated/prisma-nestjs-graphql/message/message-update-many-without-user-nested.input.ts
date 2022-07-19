import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutUserInput } from './message-create-without-user.input';
import { MessageCreateOrConnectWithoutUserInput } from './message-create-or-connect-without-user.input';
import { MessageUpsertWithWhereUniqueWithoutUserInput } from './message-upsert-with-where-unique-without-user.input';
import { MessageCreateManyUserInputEnvelope } from './message-create-many-user-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutUserInput } from './message-update-with-where-unique-without-user.input';
import { MessageUpdateManyWithWhereWithoutUserInput } from './message-update-many-with-where-without-user.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUpdateManyWithoutUserNestedInput {

    @Field(() => [MessageCreateWithoutUserInput], {nullable:true})
    create?: Array<MessageCreateWithoutUserInput>;

    @Field(() => [MessageCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutUserInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => MessageCreateManyUserInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyUserInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<MessageUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<MessageUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    deleteMany?: Array<MessageScalarWhereInput>;
}
