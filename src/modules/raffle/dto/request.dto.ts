import { RAFFLE_TYPE } from '@generated/prisma-nestjs-graphql/prisma/raffle-type.enum';
import { TRANSACTION_TYPE } from '@generated/prisma-nestjs-graphql/prisma/transaction-type.enum';
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
  expiry?: Date;
}

@InputType()
class RaffleTicketInput {
  @Field(() => String)
  original: string;

  @Field(() => String)
  sorted: string;
}

@InputType()
export class StakeRaffleInput {
  @Field(() => RAFFLE_TYPE)
  type: RAFFLE_TYPE;

  @Field(() => String, { nullable: true })
  reference: string;

  @Field(() => TRANSACTION_TYPE, { nullable: true })
  transaction_type: TRANSACTION_TYPE;

  @Field(() => [RaffleTicketInput])
  ticket: RaffleTicketInput[];
}
