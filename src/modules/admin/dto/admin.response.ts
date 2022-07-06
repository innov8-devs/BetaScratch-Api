import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DashboardTabsResponse {
  @Field()
  title: string;

  @Field(() => String || Number)
  value: string | number;
}

@ObjectType()
export class DashboardData {
  @Field(() => [DashboardTabsResponse], { nullable: true })
  tabs: DashboardTabsResponse[];
  @Field()
  purchasedToday: Number;
}

@ObjectType()
export class DashboardDataResponse {
  @Field(() => DashboardData, { nullable: true })
  data: DashboardData;
}

@ObjectType()
class FlutterCardData {
  @Field({ nullable: true })
  type: string;
  @Field({ nullable: true })
  country: string;
  @Field({ nullable: true })
  issuer: string;
  @Field({ nullable: true })
  first_6digits: string;
  @Field({ nullable: true })
  last_4digits: string;
  @Field({ nullable: true })
  expiry: string;
}

@ObjectType()
class FlutterCustomerData {
  @Field({ nullable: true })
  id: number;
  @Field({ nullable: true })
  email: string;
  @Field({ nullable: true })
  phone_number: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  created_at: string;
}

@ObjectType()
export class FlutterTansactionResponse {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  tx_ref: string;

  @Field({ nullable: true })
  flw_ref: string;

  @Field({ nullable: true })
  amount: number;

  @Field({ nullable: true })
  currency: string;

  @Field({ nullable: true })
  charged_amount: number;

  @Field({ nullable: true })
  app_fee: number;

  @Field({ nullable: true })
  merchant_fee: number;

  @Field({ nullable: true })
  processor_response: string;

  @Field({ nullable: true })
  narration: string;

  @Field({ nullable: true })
  status: string;

  @Field({ nullable: true })
  payment_type: string;

  @Field({ nullable: true })
  created_at: string;

  @Field({ nullable: true })
  amount_settled: number;

  @Field(() => FlutterCardData, { nullable: true })
  card: FlutterCardData;

  @Field(() => FlutterCustomerData, { nullable: true })
  customer: FlutterCustomerData;

  @Field({ nullable: true })
  account_id: string;
}
