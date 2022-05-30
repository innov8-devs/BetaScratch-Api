import { IsPhoneNumber } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { Token } from '@generated/prisma-nestjs-graphql/token/token.model';
import { Otp } from '@generated/prisma-nestjs-graphql/otp/otp.model';

@InputType()
export class ValidateTokenInput implements Partial<Token> {
  @Field()
  token: string;

  @Field()
  @IsPhoneNumber()
  mobileNumber: string;
}

@InputType()
export class TokenValidityInput implements Partial<Otp> {
  @Field()
  token: string;

  @Field()
  @IsPhoneNumber()
  mobileNumber: string;
}
