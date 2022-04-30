import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameWhereInput } from './game-where.input';
import { GameOrderByWithAggregationInput } from './game-order-by-with-aggregation.input';
import { GameScalarFieldEnum } from './game-scalar-field.enum';
import { GameScalarWhereWithAggregatesInput } from './game-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GameCountAggregateInput } from './game-count-aggregate.input';
import { GameAvgAggregateInput } from './game-avg-aggregate.input';
import { GameSumAggregateInput } from './game-sum-aggregate.input';
import { GameMinAggregateInput } from './game-min-aggregate.input';
import { GameMaxAggregateInput } from './game-max-aggregate.input';

@ArgsType()
export class GameGroupByArgs {

    @Field(() => GameWhereInput, {nullable:true})
    where?: GameWhereInput;

    @Field(() => [GameOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GameOrderByWithAggregationInput>;

    @Field(() => [GameScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GameScalarFieldEnum>;

    @Field(() => GameScalarWhereWithAggregatesInput, {nullable:true})
    having?: GameScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GameCountAggregateInput, {nullable:true})
    _count?: GameCountAggregateInput;

    @Field(() => GameAvgAggregateInput, {nullable:true})
    _avg?: GameAvgAggregateInput;

    @Field(() => GameSumAggregateInput, {nullable:true})
    _sum?: GameSumAggregateInput;

    @Field(() => GameMinAggregateInput, {nullable:true})
    _min?: GameMinAggregateInput;

    @Field(() => GameMaxAggregateInput, {nullable:true})
    _max?: GameMaxAggregateInput;
}
