import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageCreateWithoutAdminInput } from './message-create-without-admin.input';

@InputType()
export class MessageCreateOrConnectWithoutAdminInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutAdminInput, {nullable:false})
    create!: MessageCreateWithoutAdminInput;
}
