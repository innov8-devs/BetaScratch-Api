import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyAdminInput } from './message-create-many-admin.input';

@InputType()
export class MessageCreateManyAdminInputEnvelope {

    @Field(() => [MessageCreateManyAdminInput], {nullable:false})
    data!: Array<MessageCreateManyAdminInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
