import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleWhereInput } from './staked-raffle-where.input';
import { StakedRaffleOrderByWithAggregationInput } from './staked-raffle-order-by-with-aggregation.input';
import { StakedRaffleScalarFieldEnum } from './staked-raffle-scalar-field.enum';
import { StakedRaffleScalarWhereWithAggregatesInput } from './staked-raffle-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { StakedRaffleCountAggregateInput } from './staked-raffle-count-aggregate.input';
import { StakedRaffleAvgAggregateInput } from './staked-raffle-avg-aggregate.input';
import { StakedRaffleSumAggregateInput } from './staked-raffle-sum-aggregate.input';
import { StakedRaffleMinAggregateInput } from './staked-raffle-min-aggregate.input';
import { StakedRaffleMaxAggregateInput } from './staked-raffle-max-aggregate.input';

@ArgsType()
export class StakedRaffleGroupByArgs {

    @Field(() => StakedRaffleWhereInput, {nullable:true})
    where?: StakedRaffleWhereInput;

    @Field(() => [StakedRaffleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StakedRaffleOrderByWithAggregationInput>;

    @Field(() => [StakedRaffleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StakedRaffleScalarFieldEnum>;

    @Field(() => StakedRaffleScalarWhereWithAggregatesInput, {nullable:true})
    having?: StakedRaffleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StakedRaffleCountAggregateInput, {nullable:true})
    _count?: StakedRaffleCountAggregateInput;

    @Field(() => StakedRaffleAvgAggregateInput, {nullable:true})
    _avg?: StakedRaffleAvgAggregateInput;

    @Field(() => StakedRaffleSumAggregateInput, {nullable:true})
    _sum?: StakedRaffleSumAggregateInput;

    @Field(() => StakedRaffleMinAggregateInput, {nullable:true})
    _min?: StakedRaffleMinAggregateInput;

    @Field(() => StakedRaffleMaxAggregateInput, {nullable:true})
    _max?: StakedRaffleMaxAggregateInput;
}
