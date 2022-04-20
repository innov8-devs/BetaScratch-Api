import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@ObjectType()
export class TotalGameCount {
  @Field(() => Number, { nullable: false })
  @IsNumber()
  @IsNotEmpty()
  _count!: string;
}
