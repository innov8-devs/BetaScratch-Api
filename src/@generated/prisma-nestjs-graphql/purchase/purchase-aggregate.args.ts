import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PurchaseWhereInput } from './purchase-where.input';
import { PurchaseOrderByWithRelationAndSearchRelevanceInput } from './purchase-order-by-with-relation-and-search-relevance.input';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PurchaseCountAggregateInput } from './purchase-count-aggregate.input';
import { PurchaseAvgAggregateInput } from './purchase-avg-aggregate.input';
import { PurchaseSumAggregateInput } from './purchase-sum-aggregate.input';
import { PurchaseMinAggregateInput } from './purchase-min-aggregate.input';
import { PurchaseMaxAggregateInput } from './purchase-max-aggregate.input';

@ArgsType()
export class PurchaseAggregateArgs {

    @Field(() => PurchaseWhereInput, {nullable:true})
    where?: PurchaseWhereInput;

    @Field(() => [PurchaseOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<PurchaseOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PurchaseWhereUniqueInput, {nullable:true})
    cursor?: PurchaseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PurchaseCountAggregateInput, {nullable:true})
    _count?: PurchaseCountAggregateInput;

    @Field(() => PurchaseAvgAggregateInput, {nullable:true})
    _avg?: PurchaseAvgAggregateInput;

    @Field(() => PurchaseSumAggregateInput, {nullable:true})
    _sum?: PurchaseSumAggregateInput;

    @Field(() => PurchaseMinAggregateInput, {nullable:true})
    _min?: PurchaseMinAggregateInput;

    @Field(() => PurchaseMaxAggregateInput, {nullable:true})
    _max?: PurchaseMaxAggregateInput;
}
