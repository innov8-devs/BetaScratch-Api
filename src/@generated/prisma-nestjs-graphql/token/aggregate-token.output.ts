import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TokenCountAggregate } from './token-count-aggregate.output';
import { TokenAvgAggregate } from './token-avg-aggregate.output';
import { TokenSumAggregate } from './token-sum-aggregate.output';
import { TokenMinAggregate } from './token-min-aggregate.output';
import { TokenMaxAggregate } from './token-max-aggregate.output';

@ObjectType()
export class AggregateToken {

    @Field(() => TokenCountAggregate, {nullable:true})
    _count?: TokenCountAggregate;

    @Field(() => TokenAvgAggregate, {nullable:true})
    _avg?: TokenAvgAggregate;

    @Field(() => TokenSumAggregate, {nullable:true})
    _sum?: TokenSumAggregate;

    @Field(() => TokenMinAggregate, {nullable:true})
    _min?: TokenMinAggregate;

    @Field(() => TokenMaxAggregate, {nullable:true})
    _max?: TokenMaxAggregate;
}
