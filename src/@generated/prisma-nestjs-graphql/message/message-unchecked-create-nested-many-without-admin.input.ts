import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutAdminInput } from './message-create-without-admin.input';
import { MessageCreateOrConnectWithoutAdminInput } from './message-create-or-connect-without-admin.input';
import { MessageCreateManyAdminInputEnvelope } from './message-create-many-admin-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageUncheckedCreateNestedManyWithoutAdminInput {

    @Field(() => [MessageCreateWithoutAdminInput], {nullable:true})
    create?: Array<MessageCreateWithoutAdminInput>;

    @Field(() => [MessageCreateOrConnectWithoutAdminInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutAdminInput>;

    @Field(() => MessageCreateManyAdminInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyAdminInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;
}
