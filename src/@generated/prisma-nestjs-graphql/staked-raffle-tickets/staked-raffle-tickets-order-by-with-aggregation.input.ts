import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StakedRaffleTicketsCountOrderByAggregateInput } from './staked-raffle-tickets-count-order-by-aggregate.input';
import { StakedRaffleTicketsAvgOrderByAggregateInput } from './staked-raffle-tickets-avg-order-by-aggregate.input';
import { StakedRaffleTicketsMaxOrderByAggregateInput } from './staked-raffle-tickets-max-order-by-aggregate.input';
import { StakedRaffleTicketsMinOrderByAggregateInput } from './staked-raffle-tickets-min-order-by-aggregate.input';
import { StakedRaffleTicketsSumOrderByAggregateInput } from './staked-raffle-tickets-sum-order-by-aggregate.input';

@InputType()
export class StakedRaffleTicketsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    originalNumbers?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sortedNumbers?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reference?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transactionType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPaid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => StakedRaffleTicketsCountOrderByAggregateInput, {nullable:true})
    _count?: StakedRaffleTicketsCountOrderByAggregateInput;

    @Field(() => StakedRaffleTicketsAvgOrderByAggregateInput, {nullable:true})
    _avg?: StakedRaffleTicketsAvgOrderByAggregateInput;

    @Field(() => StakedRaffleTicketsMaxOrderByAggregateInput, {nullable:true})
    _max?: StakedRaffleTicketsMaxOrderByAggregateInput;

    @Field(() => StakedRaffleTicketsMinOrderByAggregateInput, {nullable:true})
    _min?: StakedRaffleTicketsMinOrderByAggregateInput;

    @Field(() => StakedRaffleTicketsSumOrderByAggregateInput, {nullable:true})
    _sum?: StakedRaffleTicketsSumOrderByAggregateInput;
}
