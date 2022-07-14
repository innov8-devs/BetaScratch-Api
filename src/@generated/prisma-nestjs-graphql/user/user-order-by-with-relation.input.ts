import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WalletOrderByWithRelationInput } from '../wallet/wallet-order-by-with-relation.input';
import { TransactionOrderByRelationAggregateInput } from '../transaction/transaction-order-by-relation-aggregate.input';
import { OtpOrderByRelationAggregateInput } from '../otp/otp-order-by-relation-aggregate.input';
import { WithdrawalRequestOrderByRelationAggregateInput } from '../withdrawal-request/withdrawal-request-order-by-relation-aggregate.input';
import { CartOrderByRelationAggregateInput } from '../cart/cart-order-by-relation-aggregate.input';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { ReferralOrderByRelationAggregateInput } from '../referral/referral-order-by-relation-aggregate.input';
import { TokenOrderByRelationAggregateInput } from '../token/token-order-by-relation-aggregate.input';
import { PurchaseOrderByRelationAggregateInput } from '../purchase/purchase-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dateOfBirth?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobileNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    confirmed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    disabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    licenseFrontImage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    licenseBackImage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    licenseNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verificationType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verificationStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vipStatus?: keyof typeof SortOrder;

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    wallet?: WalletOrderByWithRelationInput;

    @Field(() => TransactionOrderByRelationAggregateInput, {nullable:true})
    transactions?: TransactionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => OtpOrderByRelationAggregateInput, {nullable:true})
    otp?: OtpOrderByRelationAggregateInput;

    @Field(() => WithdrawalRequestOrderByRelationAggregateInput, {nullable:true})
    withdrawalRequest?: WithdrawalRequestOrderByRelationAggregateInput;

    @Field(() => CartOrderByRelationAggregateInput, {nullable:true})
    purchases?: CartOrderByRelationAggregateInput;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    message?: MessageOrderByRelationAggregateInput;

    @Field(() => ReferralOrderByRelationAggregateInput, {nullable:true})
    referral?: ReferralOrderByRelationAggregateInput;

    @Field(() => TokenOrderByRelationAggregateInput, {nullable:true})
    token?: TokenOrderByRelationAggregateInput;

    @Field(() => PurchaseOrderByRelationAggregateInput, {nullable:true})
    purchase?: PurchaseOrderByRelationAggregateInput;
}
