import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RaffleCountOrderByAggregateInput } from './raffle-count-order-by-aggregate.input';
import { RaffleAvgOrderByAggregateInput } from './raffle-avg-order-by-aggregate.input';
import { RaffleMaxOrderByAggregateInput } from './raffle-max-order-by-aggregate.input';
import { RaffleMinOrderByAggregateInput } from './raffle-min-order-by-aggregate.input';
import { RaffleSumOrderByAggregateInput } from './raffle-sum-order-by-aggregate.input';

@InputType()
export class RaffleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    win?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stake?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiriy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RaffleCountOrderByAggregateInput, {nullable:true})
    _count?: RaffleCountOrderByAggregateInput;

    @Field(() => RaffleAvgOrderByAggregateInput, {nullable:true})
    _avg?: RaffleAvgOrderByAggregateInput;

    @Field(() => RaffleMaxOrderByAggregateInput, {nullable:true})
    _max?: RaffleMaxOrderByAggregateInput;

    @Field(() => RaffleMinOrderByAggregateInput, {nullable:true})
    _min?: RaffleMinOrderByAggregateInput;

    @Field(() => RaffleSumOrderByAggregateInput, {nullable:true})
    _sum?: RaffleSumOrderByAggregateInput;
}
