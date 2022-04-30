import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { WalletCountAggregate } from './wallet-count-aggregate.output';
import { WalletAvgAggregate } from './wallet-avg-aggregate.output';
import { WalletSumAggregate } from './wallet-sum-aggregate.output';
import { WalletMinAggregate } from './wallet-min-aggregate.output';
import { WalletMaxAggregate } from './wallet-max-aggregate.output';

@ObjectType()
export class WalletGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Float, {nullable:false})
    withdrawable!: number;

    @Field(() => Float, {nullable:false})
    bonus!: number;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => WalletCountAggregate, {nullable:true})
    _count?: WalletCountAggregate;

    @Field(() => WalletAvgAggregate, {nullable:true})
    _avg?: WalletAvgAggregate;

    @Field(() => WalletSumAggregate, {nullable:true})
    _sum?: WalletSumAggregate;

    @Field(() => WalletMinAggregate, {nullable:true})
    _min?: WalletMinAggregate;

    @Field(() => WalletMaxAggregate, {nullable:true})
    _max?: WalletMaxAggregate;
}
