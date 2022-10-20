import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendSmsParams {
  @Field()
  to: string;
  @Field()
  sms: string;
}
