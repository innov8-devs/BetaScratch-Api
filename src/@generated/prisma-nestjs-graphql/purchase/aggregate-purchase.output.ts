import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PurchaseCountAggregate } from './purchase-count-aggregate.output';
import { PurchaseAvgAggregate } from './purchase-avg-aggregate.output';
import { PurchaseSumAggregate } from './purchase-sum-aggregate.output';
import { PurchaseMinAggregate } from './purchase-min-aggregate.output';
import { PurchaseMaxAggregate } from './purchase-max-aggregate.output';

@ObjectType()
export class AggregatePurchase {

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
