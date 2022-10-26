import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendSmsParams {
  @Field(() => String)
  to: string;
  @Field()
  sms: string;
}

@InputType()
export class SendBulkSmsParams {
  @Field(() => [String])
  to: string[];
  @Field()
  sms: string;
}
