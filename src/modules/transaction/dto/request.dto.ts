import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { PAYMENT_PURPOSE } from 'types/constants/enum';

@InputType()
export class InitiateDepositInput {
  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  amount!: string;

  // Todo Make an enum, also remember the prisma schema also

  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  currency!: string;
}

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
export class VerifyTransactionInput {
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  status!: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  tx_ref!: string;

  @Field(() => String, { nullable: true })
  tx_id: string;
}
