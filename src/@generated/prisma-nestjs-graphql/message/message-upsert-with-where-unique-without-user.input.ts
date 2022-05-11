import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutUserInput } from './message-update-without-user.input';
import { MessageCreateWithoutUserInput } from './message-create-without-user.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutUserInput, {nullable:false})
    update!: MessageUpdateWithoutUserInput;

    @Field(() => MessageCreateWithoutUserInput, {nullable:false})
    create!: MessageCreateWithoutUserInput;
}
