import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutAdminInput } from './message-update-without-admin.input';
import { MessageCreateWithoutAdminInput } from './message-create-without-admin.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutAdminInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutAdminInput, {nullable:false})
    update!: MessageUpdateWithoutAdminInput;

    @Field(() => MessageCreateWithoutAdminInput, {nullable:false})
    create!: MessageCreateWithoutAdminInput;
}
