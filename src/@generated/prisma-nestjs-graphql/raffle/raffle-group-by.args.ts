import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RaffleWhereInput } from './raffle-where.input';
import { RaffleOrderByWithAggregationInput } from './raffle-order-by-with-aggregation.input';
import { RaffleScalarFieldEnum } from './raffle-scalar-field.enum';
import { RaffleScalarWhereWithAggregatesInput } from './raffle-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RaffleCountAggregateInput } from './raffle-count-aggregate.input';
import { RaffleAvgAggregateInput } from './raffle-avg-aggregate.input';
import { RaffleSumAggregateInput } from './raffle-sum-aggregate.input';
import { RaffleMinAggregateInput } from './raffle-min-aggregate.input';
import { RaffleMaxAggregateInput } from './raffle-max-aggregate.input';

@ArgsType()
export class RaffleGroupByArgs {

    @Field(() => RaffleWhereInput, {nullable:true})
    where?: RaffleWhereInput;

    @Field(() => [RaffleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RaffleOrderByWithAggregationInput>;

    @Field(() => [RaffleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RaffleScalarFieldEnum>;

    @Field(() => RaffleScalarWhereWithAggregatesInput, {nullable:true})
    having?: RaffleScalarWhereWithAggregatesInput;

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
