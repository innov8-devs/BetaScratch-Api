import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RaffleWhereInput } from './raffle-where.input';
import { RaffleOrderByWithRelationAndSearchRelevanceInput } from './raffle-order-by-with-relation-and-search-relevance.input';
import { RaffleWhereUniqueInput } from './raffle-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RaffleCountAggregateInput } from './raffle-count-aggregate.input';
import { RaffleAvgAggregateInput } from './raffle-avg-aggregate.input';
import { RaffleSumAggregateInput } from './raffle-sum-aggregate.input';
import { RaffleMinAggregateInput } from './raffle-min-aggregate.input';
import { RaffleMaxAggregateInput } from './raffle-max-aggregate.input';

@ArgsType()
export class RaffleAggregateArgs {

    @Field(() => RaffleWhereInput, {nullable:true})
    where?: RaffleWhereInput;

    @Field(() => [RaffleOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<RaffleOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => RaffleWhereUniqueInput, {nullable:true})
    cursor?: RaffleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RaffleCountAggregateInput, {nullable:true})
    _count?: RaffleCountAggregateInput;

    @Field(() => RaffleAvgAggregateInput, {nullable:true})
    _avg?: RaffleAvgAggregateInput;

    @Field(() => RaffleSumAggregateInput, {nullable:true})
    _sum?: RaffleSumAggregateInput;

    @Field(() => RaffleMinAggregateInput, {nullable:true})
    _min?: RaffleMinAggregateInput;

    @Field(() => RaffleMaxAggregateInput, {nullable:true})
    _max?: RaffleMaxAggregateInput;
}
