import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyUserInput } from './message-create-many-user.input';

@InputType()
export class MessageCreateManyUserInputEnvelope {

    @Field(() => [MessageCreateManyUserInput], {nullable:false})
    data!: Array<MessageCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
