import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StakedRaffleCountOrderByAggregateInput } from './staked-raffle-count-order-by-aggregate.input';
import { StakedRaffleAvgOrderByAggregateInput } from './staked-raffle-avg-order-by-aggregate.input';
import { StakedRaffleMaxOrderByAggregateInput } from './staked-raffle-max-order-by-aggregate.input';
import { StakedRaffleMinOrderByAggregateInput } from './staked-raffle-min-order-by-aggregate.input';
import { StakedRaffleSumOrderByAggregateInput } from './staked-raffle-sum-order-by-aggregate.input';

@InputType()
export class StakedRaffleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    numbers?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => StakedRaffleCountOrderByAggregateInput, {nullable:true})
    _count?: StakedRaffleCountOrderByAggregateInput;

    @Field(() => StakedRaffleAvgOrderByAggregateInput, {nullable:true})
    _avg?: StakedRaffleAvgOrderByAggregateInput;

    @Field(() => StakedRaffleMaxOrderByAggregateInput, {nullable:true})
    _max?: StakedRaffleMaxOrderByAggregateInput;

    @Field(() => StakedRaffleMinOrderByAggregateInput, {nullable:true})
    _min?: StakedRaffleMinOrderByAggregateInput;

    @Field(() => StakedRaffleSumOrderByAggregateInput, {nullable:true})
    _sum?: StakedRaffleSumOrderByAggregateInput;
}
