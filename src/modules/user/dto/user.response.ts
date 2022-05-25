import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@ObjectType()
export class TotalUserCount {
  @Field(() => Number, { nullable: false })
  @IsNumber()
  @IsNotEmpty()
  _count!: string;
}

@ObjectType()
export class FetchUserReferralsResponse {
  @Field()
  name: string;
  @Field(() => Date)
  joined: Date | string;
}
