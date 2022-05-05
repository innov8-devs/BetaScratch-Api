import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEnum, IsNumber } from 'class-validator';
import { PAYMENT_PURPOSE } from 'types/constants/enum';

@InputType()
export class InitiatePaymentInput {
  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  amount!: string;

  // Todo Make an enum, also remember the prisma schema also

  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  currency!: string;

  @Field(() => String, { nullable: false })
  @IsEnum(PAYMENT_PURPOSE, { each: true })
  purpose!: PAYMENT_PURPOSE;
}

@InputType()
export class TransactionHistoryInput {
  @Field(() => Number)
  @IsNumber()
  page: number;

  @Field(() => Number)
  @IsNumber()
  size: number;
}
