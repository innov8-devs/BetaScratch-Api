import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CURRENCY, WALLET_TYPE } from 'types/constants/enum';

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
export class TransferFromWalletInput {
  @Field(() => String, { nullable: false })
  @IsNumber()
  @IsNotEmpty()
  amount!: number;

  @Field(() => String, { nullable: false })
  @IsString()
  reciepientPhoneNumber!: string;
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
}
