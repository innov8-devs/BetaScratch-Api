import { RAFFLE_TYPE } from '@generated/prisma-nestjs-graphql/prisma/raffle-type.enum';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateRaffleInput {
  @Field(() => RAFFLE_TYPE, { nullable: true })
  type?: RAFFLE_TYPE;

  @Field(() => Number, { nullable: true })
  win?: number;

  @Field(() => Number, { nullable: true })
  stake?: number;

  @Field(() => Date, { nullable: true })
  expiriy?: Date;
}
