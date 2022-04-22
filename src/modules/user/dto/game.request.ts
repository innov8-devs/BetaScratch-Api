import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsNumber } from 'class-validator';

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
