import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageCreateWithoutUserInput } from './message-create-without-user.input';

@InputType()
export class MessageCreateOrConnectWithoutUserInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutUserInput, {nullable:false})
    create!: MessageCreateWithoutUserInput;
}
