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
export class Referees {
  @Field({ nullable: true })
  name: string;
  @Field(() => Date, { nullable: true })
  joined: Date | string;
}

@ObjectType()
export class FetchUserReferralsResponse {
  @Field(() => [Referees], { nullable: true })
  users: Referees[];
  @Field({ nullable: true })
  totalInvites: number;
  @Field({ nullable: true })
  invitesFunded: number;
  @Field({ nullable: true })
  totalEarned: number;
}
