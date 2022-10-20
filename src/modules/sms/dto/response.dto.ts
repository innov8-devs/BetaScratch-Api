import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SmsResponse {
  @Field()
  code: string;
  @Field()
  message_id: string;
  @Field()
  message_id_str: string;
  @Field()
  message: string;
  @Field()
  balance: number;
  @Field()
  user: string;
}
