import { CURRENCY } from '@generated/prisma-nestjs-graphql/prisma/currency.enum';
import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { WALLET_TYPE } from 'types/constants/enum';

@InputType()
export class DeductUserBalanceInput {
  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  amount!: string;

  @Field(() => Number, { nullable: false })
  @IsNotEmpty()
  userId!: number;

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

@InputType()
export class WithdrawalRequestPaginationInput {
  @Field(() => Number, { nullable: true })
  @IsNumber()
  skip?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  take?: number;
}

@InputType()
export class ChangeUserWithdrawalRequestInput {
  @Field(() => Number)
  @IsNumber()
  id: number;

  @Field(() => String)
  @IsString()
  status: string;

  @Field(() => Number)
  @IsNumber()
  page: number;

  @Field(() => Number)
  @IsNumber()
  size: number;

  @Field(() => String, { nullable: true })
  orderColumn?: string = 'id';

  @Field(() => String, { nullable: true })
  orderBy?: string = 'asc';
}
