import { Field, InputType, Int } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { IsArray, IsEnum, IsNumber, IsString } from 'class-validator';
import { TRANSACTION } from 'types/constants/enum';

@InputType()
export class UpdateGameInput {
  @Field(() => Number, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  imageUrl?: string;
  @Field(() => String, { nullable: true })
  status?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => GraphQLJSON, { nullable: true })
  price?: any;
  @Field(() => String, { nullable: true })
  category?: string;
  @Field(() => Number, { nullable: true })
  availability?: number;
}

@InputType()
export class GamePaginationInput {
  @Field(() => Number, { nullable: true })
  @IsNumber()
  skip?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  take?: number;
}

@InputType()
export class GameCateogorySearch {
  @Field(() => [String], { nullable: true })
  @IsArray()
  categories?: string[];

  @Field(() => Number)
  @IsNumber()
  page: number;

  @Field(() => Number)
  @IsNumber()
  size: number;
}

@InputType()
export class PurchaseSearch {
  @Field(() => Number)
  @IsNumber()
  page: number;

  @Field(() => Number)
  @IsNumber()
  size: number;
}

@InputType()
export class CartDetailInput {
  @Field(() => [Number])
  @IsArray()
  gameIds?: number[];
}

@InputType()
export class CartItems {
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String, { nullable: true })
  gameId?: string;

  @Field(() => String || Number, { nullable: true })
  id: string | number;

  @Field(() => String)
  @IsString()
  category: string;

  @Field(() => GraphQLJSON, { nullable: false })
  price!: any;

  @Field(() => Number)
  @IsNumber()
  quantity: number;

  @Field(() => String)
  @IsNumber()
  imageUrl: string;
}
@InputType()
export class CartCheckoutInput {
  @Field(() => Number, { nullable: true })
  transaction_id?: number;

  @Field(() => Number, { nullable: false })
  @IsNumber()
  subtotal!: number;

  @Field(() => String, { nullable: true })
  couponCode?: string;

  @Field(() => String, { nullable: false })
  @IsEnum(TRANSACTION, { each: true })
  transaction_type!: TRANSACTION | string;

  @Field(() => [CartItems], { nullable: false })
  @IsArray()
  cart: any;
}

@InputType()
export class StripeCheckoutInput {
  @Field(() => [CartItems], { nullable: false })
  @IsArray()
  cart: any;
}

@InputType()
export class FlutterCheckoutOneInput {
  @Field(() => String, { nullable: false })
  tx_ref!: string;

  @Field(() => [CartItems], { nullable: false })
  @IsArray()
  cart: CartItems[];

  @Field(() => Number, { nullable: false })
  subtotal!: number;

  @Field(() => String, { nullable: true })
  couponCode?: string;
}

@InputType()
export class BankTransferCheckoutInput {
  @Field(() => String, { nullable: false })
  transaction_type!: string;

  @Field(() => Number, { nullable: false })
  subtotal!: number;

  @Field(() => [CartItems], { nullable: false })
  @IsArray()
  cart: CartItems[];

  @Field(() => String, { nullable: true })
  couponCode?: string;
}

@InputType()
export class FlutterCheckoutTwoInput {
  @Field(() => String, { nullable: false })
  tx_ref!: string;

  @Field(() => Number, { nullable: false })
  transaction_id!: number;

  @Field(() => [CartItems], { nullable: false })
  @IsArray()
  cart: CartItems[];

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  test: boolean;
}

@InputType()
export class CreateGameInput {
  @Field(() => String, { nullable: false })
  @IsString()
  name!: string;

  @Field(() => String, { nullable: false })
  @IsString()
  imageUrl!: string;

  @Field(() => String, { nullable: false })
  @IsString()
  description!: string;

  @Field(() => GraphQLJSON, { nullable: false })
  price!: any;

  @Field(() => String, { nullable: false })
  category!: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Int, { nullable: false })
  @IsNumber()
  availability!: number;
}
