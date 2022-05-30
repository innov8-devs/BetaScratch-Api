import { IsPhoneNumber } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { Otp } from '@generated/prisma-nestjs-graphql/otp/otp.model';

@InputType()
export class ValidateOtpInput implements Partial<Otp> {
  @Field()
  otp: string;

  @Field()
  @IsPhoneNumber()
  mobileNumber: string;
}

@InputType()
export class OtpValidityInput implements Partial<Otp> {
  @Field()
  otp: string;

  @Field()
  @IsPhoneNumber()
  mobileNumber: string;
}
