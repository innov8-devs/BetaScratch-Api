import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FlutterwaveLogCountAggregate } from './flutterwave-log-count-aggregate.output';
import { FlutterwaveLogAvgAggregate } from './flutterwave-log-avg-aggregate.output';
import { FlutterwaveLogSumAggregate } from './flutterwave-log-sum-aggregate.output';
import { FlutterwaveLogMinAggregate } from './flutterwave-log-min-aggregate.output';
import { FlutterwaveLogMaxAggregate } from './flutterwave-log-max-aggregate.output';

@ObjectType()
export class AggregateFlutterwaveLog {

    @Field(() => FlutterwaveLogCountAggregate, {nullable:true})
    _count?: FlutterwaveLogCountAggregate;

    @Field(() => FlutterwaveLogAvgAggregate, {nullable:true})
    _avg?: FlutterwaveLogAvgAggregate;

    @Field(() => FlutterwaveLogSumAggregate, {nullable:true})
    _sum?: FlutterwaveLogSumAggregate;

    @Field(() => FlutterwaveLogMinAggregate, {nullable:true})
    _min?: FlutterwaveLogMinAggregate;

    @Field(() => FlutterwaveLogMaxAggregate, {nullable:true})
    _max?: FlutterwaveLogMaxAggregate;
}
