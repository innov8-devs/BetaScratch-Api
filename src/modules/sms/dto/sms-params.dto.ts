import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SendSmsParams {
  @Field(() => [String], { nullable: true })
  to: string[];
  @Field()
  sms: string;
}
