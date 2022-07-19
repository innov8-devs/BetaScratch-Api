import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutAdminInput } from './message-create-without-admin.input';
import { MessageCreateOrConnectWithoutAdminInput } from './message-create-or-connect-without-admin.input';
import { MessageUpsertWithWhereUniqueWithoutAdminInput } from './message-upsert-with-where-unique-without-admin.input';
import { MessageCreateManyAdminInputEnvelope } from './message-create-many-admin-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutAdminInput } from './message-update-with-where-unique-without-admin.input';
import { MessageUpdateManyWithWhereWithoutAdminInput } from './message-update-many-with-where-without-admin.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUncheckedUpdateManyWithoutAdminNestedInput {

    @Field(() => [MessageCreateWithoutAdminInput], {nullable:true})
    create?: Array<MessageCreateWithoutAdminInput>;

    @Field(() => [MessageCreateOrConnectWithoutAdminInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutAdminInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutAdminInput], {nullable:true})
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutAdminInput>;

    @Field(() => MessageCreateManyAdminInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyAdminInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutAdminInput], {nullable:true})
    update?: Array<MessageUpdateWithWhereUniqueWithoutAdminInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutAdminInput], {nullable:true})
    updateMany?: Array<MessageUpdateManyWithWhereWithoutAdminInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    deleteMany?: Array<MessageScalarWhereInput>;
}
