import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutAdminInput } from './message-update-without-admin.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutAdminInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutAdminInput, {nullable:false})
    data!: MessageUpdateWithoutAdminInput;
}
