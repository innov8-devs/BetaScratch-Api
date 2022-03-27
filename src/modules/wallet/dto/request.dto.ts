import { CURRENCY } from '@generated/prisma-nestjs-graphql/prisma/currency.enum';
import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { WALLET_TYPE } from 'types/constants/enum';

@InputType()
export class DeductUserBalanceInput {
  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  amount!: string;

  @Field(() => String, { nullable: false })
  @IsEnum(CURRENCY, { each: true })
  currency!: CURRENCY;

  @Field(() => String, { nullable: false })
  @IsEnum(WALLET_TYPE, { each: true })
  wallet!: WALLET_TYPE;
}

@InputType()
export class CashBackTransactionInput {
  @Field(() => Number, { nullable: false })
  @IsNotEmpty()
  cashBackAmount!: number;

  @Field(() => String, { nullable: false })
  @IsEnum(CURRENCY, { each: true })
  currency!: CURRENCY | string;
}
