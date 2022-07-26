import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { FlutterwaveLogCountAggregate } from './flutterwave-log-count-aggregate.output';
import { FlutterwaveLogAvgAggregate } from './flutterwave-log-avg-aggregate.output';
import { FlutterwaveLogSumAggregate } from './flutterwave-log-sum-aggregate.output';
import { FlutterwaveLogMinAggregate } from './flutterwave-log-min-aggregate.output';
import { FlutterwaveLogMaxAggregate } from './flutterwave-log-max-aggregate.output';

@ObjectType()
export class FlutterwaveLogGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    tx_ref!: string;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:false})
    paymentType!: string;

    @Field(() => String, {nullable:true})
    customerName?: string;

    @Field(() => String, {nullable:true})
    customerEmail?: string;

    @Field(() => String, {nullable:false})
    narration!: string;

    @Field(() => String, {nullable:true})
    processorResponse?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    card?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
