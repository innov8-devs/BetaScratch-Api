import { Field, InputType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { IsArray, IsEnum, IsNumber, IsString } from 'class-validator';
import { TRANSACTION } from 'types/constants/enum';

@InputType()
export class UpdateGameInput {
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  imageUrl?: string;
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

  @Field(() => String)
  @IsString()
  category: string;

  @Field(() => Number)
  @IsNumber()
  price: number;

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
  @IsNumber()
  transaction_id?: number;

  @Field(() => Number, { nullable: false })
  @IsNumber()
  subtotal!: number;

  @Field(() => String, { nullable: false })
  @IsEnum(TRANSACTION, { each: true })
  transaction_type!: TRANSACTION | string;

  @Field(() => [CartItems], { nullable: false })
  @IsArray()
  cart: CartItems[];
}
