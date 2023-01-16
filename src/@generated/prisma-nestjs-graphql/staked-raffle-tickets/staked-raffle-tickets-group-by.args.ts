import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleTicketsWhereInput } from './staked-raffle-tickets-where.input';
import { StakedRaffleTicketsOrderByWithAggregationInput } from './staked-raffle-tickets-order-by-with-aggregation.input';
import { StakedRaffleTicketsScalarFieldEnum } from './staked-raffle-tickets-scalar-field.enum';
import { StakedRaffleTicketsScalarWhereWithAggregatesInput } from './staked-raffle-tickets-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { StakedRaffleTicketsCountAggregateInput } from './staked-raffle-tickets-count-aggregate.input';
import { StakedRaffleTicketsAvgAggregateInput } from './staked-raffle-tickets-avg-aggregate.input';
import { StakedRaffleTicketsSumAggregateInput } from './staked-raffle-tickets-sum-aggregate.input';
import { StakedRaffleTicketsMinAggregateInput } from './staked-raffle-tickets-min-aggregate.input';
import { StakedRaffleTicketsMaxAggregateInput } from './staked-raffle-tickets-max-aggregate.input';

@ArgsType()
export class StakedRaffleTicketsGroupByArgs {

    @Field(() => StakedRaffleTicketsWhereInput, {nullable:true})
    where?: StakedRaffleTicketsWhereInput;

    @Field(() => [StakedRaffleTicketsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StakedRaffleTicketsOrderByWithAggregationInput>;

    @Field(() => [StakedRaffleTicketsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StakedRaffleTicketsScalarFieldEnum>;

    @Field(() => StakedRaffleTicketsScalarWhereWithAggregatesInput, {nullable:true})
    having?: StakedRaffleTicketsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StakedRaffleTicketsCountAggregateInput, {nullable:true})
    _count?: StakedRaffleTicketsCountAggregateInput;

    @Field(() => StakedRaffleTicketsAvgAggregateInput, {nullable:true})
    _avg?: StakedRaffleTicketsAvgAggregateInput;

    @Field(() => StakedRaffleTicketsSumAggregateInput, {nullable:true})
    _sum?: StakedRaffleTicketsSumAggregateInput;

    @Field(() => StakedRaffleTicketsMinAggregateInput, {nullable:true})
    _min?: StakedRaffleTicketsMinAggregateInput;

    @Field(() => StakedRaffleTicketsMaxAggregateInput, {nullable:true})
    _max?: StakedRaffleTicketsMaxAggregateInput;
}
