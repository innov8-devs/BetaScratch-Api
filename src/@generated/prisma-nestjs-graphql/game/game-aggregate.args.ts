import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameWhereInput } from './game-where.input';
import { GameOrderByWithRelationInput } from './game-order-by-with-relation.input';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameCountAggregateInput } from './game-count-aggregate.input';
import { GameAvgAggregateInput } from './game-avg-aggregate.input';
import { GameSumAggregateInput } from './game-sum-aggregate.input';
import { GameMinAggregateInput } from './game-min-aggregate.input';
import { GameMaxAggregateInput } from './game-max-aggregate.input';

@ArgsType()
export class GameAggregateArgs {

    @Field(() => GameWhereInput, {nullable:true})
    where?: GameWhereInput;

    @Field(() => [GameOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GameOrderByWithRelationInput>;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    cursor?: GameWhereUniqueInput;

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
