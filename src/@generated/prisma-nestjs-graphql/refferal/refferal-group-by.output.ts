import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RefferalCountAggregate } from './refferal-count-aggregate.output';
import { RefferalAvgAggregate } from './refferal-avg-aggregate.output';
import { RefferalSumAggregate } from './refferal-sum-aggregate.output';
import { RefferalMinAggregate } from './refferal-min-aggregate.output';
import { RefferalMaxAggregate } from './refferal-max-aggregate.output';

@ObjectType()
export class RefferalGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => [String], {nullable:true})
    referrals?: Array<string>;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
