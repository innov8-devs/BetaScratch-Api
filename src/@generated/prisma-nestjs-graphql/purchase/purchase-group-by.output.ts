import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TRANSACTION_TYPE } from '../prisma/transaction-type.enum';
import { PurchaseCountAggregate } from './purchase-count-aggregate.output';
import { PurchaseAvgAggregate } from './purchase-avg-aggregate.output';
import { PurchaseSumAggregate } from './purchase-sum-aggregate.output';
import { PurchaseMinAggregate } from './purchase-min-aggregate.output';
import { PurchaseMaxAggregate } from './purchase-max-aggregate.output';

@ObjectType()
export class PurchaseGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:false})
    reference!: string;

    @Field(() => Int, {nullable:false})
    subtotal!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => TRANSACTION_TYPE, {nullable:true})
    transactionType?: keyof typeof TRANSACTION_TYPE;

    @Field(() => String, {nullable:true})
    flutterwaveType?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PurchaseCountAggregate, {nullable:true})
    _count?: PurchaseCountAggregate;

    @Field(() => PurchaseAvgAggregate, {nullable:true})
    _avg?: PurchaseAvgAggregate;

    @Field(() => PurchaseSumAggregate, {nullable:true})
    _sum?: PurchaseSumAggregate;

    @Field(() => PurchaseMinAggregate, {nullable:true})
    _min?: PurchaseMinAggregate;

    @Field(() => PurchaseMaxAggregate, {nullable:true})
    _max?: PurchaseMaxAggregate;
}
