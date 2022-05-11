import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutUserInput } from './message-update-without-user.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutUserInput, {nullable:false})
    data!: MessageUpdateWithoutUserInput;
}
