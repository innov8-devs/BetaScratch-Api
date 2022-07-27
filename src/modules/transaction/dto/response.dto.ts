import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Customer {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  phone_number: string;

  @Field()
  name: string;

  @Field()
  created_at: string;
}

@ObjectType()
class Card {
  @Field()
  type: string;

  @Field()
  country: string;

  @Field()
  issuer: string;

  @Field()
  first_6digits: string;

  @Field()
  last_4digits: string;

  @Field()
  expiry: string;
}

@ObjectType()
export class FlutterTransactionsResponse {
  @Field()
  id: number;

  @Field()
  amount: number;

  @Field()
  currency: string;

  @Field()
  narration: string;

  @Field()
  status: string;

  @Field()
  payment_type: string;

  @Field()
  createdAt: string;

  @Field(() => Card)
  card: Card;

  @Field(() => Customer)
  customer: Customer;
}
