import { Cart } from '@generated/prisma-nestjs-graphql/cart/cart.model';
import { GENDER } from '@generated/prisma-nestjs-graphql/prisma/gender.enum';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Wallet } from '@generated/prisma-nestjs-graphql/wallet/wallet.model';
import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

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

@ObjectType()
export class SortReturnData {
  @Field(() => ID, { nullable: false })
  id!: number;

  // user
  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date;

  @Field(() => ROLE, { nullable: true })
  role?: keyof typeof ROLE;

  @Field(() => GENDER, { nullable: true })
  gender?: keyof typeof GENDER;

  @Field({ nullable: true })
  mobileNumber?: string;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  confirmed?: boolean;

  @Field({ nullable: true })
  disabled?: boolean;

  @Field({ nullable: true })
  licenseFrontImage?: string;

  @Field({ nullable: true })
  licenseBackImage?: string;

  @Field({ nullable: true })
  licenseNumber?: string;

  @Field({ nullable: true })
  verificationType?: string;

  @Field({ nullable: true })
  verificationStatus?: string;

  @Field(() => Float, { nullable: true })
  vipStatus?: number;

  @Field(() => Wallet, { nullable: true })
  wallet?: Wallet;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  // game

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  gameId?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  price?: any;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  availability?: number;

  // withdrawal request
  @Field(() => User, { nullable: true })
  user?: User;

  @Field({ nullable: true })
  bank?: string;

  @Field({ nullable: true })
  accountNumber?: string;

  @Field({ nullable: true })
  accountName?: string;

  @Field({ nullable: true })
  amount?: string;

  // @Field( { nullable: true })
  // status?: string;

  @Field({ nullable: true })
  paypal?: string;

  @Field({ nullable: true })
  btcWalletAdderess?: string;

  // purchase

  // @Field( {nullable:true})
  // username?: string;

  // @Field({nullable:true})
  // email?: string;

  // @Field( {nullable:true})
  // status?: string;

  @Field({ nullable: true })
  quantity?: number;

  @Field({ nullable: true })
  reference?: string;

  @Field({ nullable: true })
  subtotal?: number;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  cards?: Cart;

  // transaction
  @Field({ nullable: true })
  transactionId?: number;

  @Field({ nullable: true })
  currency?: string;

  @Field({ nullable: true })
  transactionRef?: string;

  @Field({ nullable: true })
  purpose?: string;

  @Field({ nullable: true })
  type?: string | null;
}
