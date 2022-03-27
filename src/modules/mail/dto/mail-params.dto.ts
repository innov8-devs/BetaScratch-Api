import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendMailParams {
  @Field()
  to: string;
  @Field()
  subject: string;
  @Field()
  html: string;
}
