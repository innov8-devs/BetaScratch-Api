import { IsPhoneNumber } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { Token } from '@generated/prisma-nestjs-graphql/token/token.model';

@InputType()
export class ValidateTokenInput implements Partial<Token> {
  @Field()
  token: string;

  @Field()
  @IsPhoneNumber()
  mobileNumber: string;
}

@InputType()
export class TokenValidityInput implements Partial<Token> {
  @Field()
  token: string;

  @Field()
  @IsPhoneNumber()
  mobileNumber: string;
}
