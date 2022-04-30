import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CartCountAggregate } from './cart-count-aggregate.output';
import { CartAvgAggregate } from './cart-avg-aggregate.output';
import { CartSumAggregate } from './cart-sum-aggregate.output';
import { CartMinAggregate } from './cart-min-aggregate.output';
import { CartMaxAggregate } from './cart-max-aggregate.output';

@ObjectType()
export class CartGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    price!: any;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CartCountAggregate, {nullable:true})
    _count?: CartCountAggregate;

    @Field(() => CartAvgAggregate, {nullable:true})
    _avg?: CartAvgAggregate;

    @Field(() => CartSumAggregate, {nullable:true})
    _sum?: CartSumAggregate;

    @Field(() => CartMinAggregate, {nullable:true})
    _min?: CartMinAggregate;

    @Field(() => CartMaxAggregate, {nullable:true})
    _max?: CartMaxAggregate;
}
