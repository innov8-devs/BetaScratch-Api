import { Game } from '@generated/prisma-nestjs-graphql/game/game.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@ObjectType()
export class TotalGameCount {
  @Field(() => Number, { nullable: false })
  @IsNumber()
  @IsNotEmpty()
  _count!: string;
}

@ObjectType()
export class GameCategoryReturnType {
  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Field(() => [Game], { nullable: false })
  @IsArray()
  @IsNotEmpty()
  games: Game[];
}

@ObjectType()
export class FlutterCheckoutOneReturnType {
  @Field(() => String, { nullable: false })
  @IsString()
  @IsNotEmpty()
  transaction_reference: string;
}

@ObjectType()
export class StripeTokenResponse {
  @Field()
  clientSecret: string;
}
