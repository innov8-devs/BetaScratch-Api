import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RefferalCountAggregate } from './refferal-count-aggregate.output';
import { RefferalAvgAggregate } from './refferal-avg-aggregate.output';
import { RefferalSumAggregate } from './refferal-sum-aggregate.output';
import { RefferalMinAggregate } from './refferal-min-aggregate.output';
import { RefferalMaxAggregate } from './refferal-max-aggregate.output';

@ObjectType()
export class AggregateRefferal {

    @Field(() => RefferalCountAggregate, {nullable:true})
    _count?: RefferalCountAggregate;

    @Field(() => RefferalAvgAggregate, {nullable:true})
    _avg?: RefferalAvgAggregate;

    @Field(() => RefferalSumAggregate, {nullable:true})
    _sum?: RefferalSumAggregate;

    @Field(() => RefferalMinAggregate, {nullable:true})
    _min?: RefferalMinAggregate;

    @Field(() => RefferalMaxAggregate, {nullable:true})
    _max?: RefferalMaxAggregate;
}
