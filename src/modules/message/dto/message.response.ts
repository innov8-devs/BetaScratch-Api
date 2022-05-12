import { Message } from '@generated/prisma-nestjs-graphql/message/message.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetUserMessagesResponse {
  @Field(() => [Message], { nullable: true })
  unread?: Message[];

  @Field(() => [Message], { nullable: true })
  read?: Message[];
}
