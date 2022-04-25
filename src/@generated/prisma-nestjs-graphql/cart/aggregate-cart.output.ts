import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CartCountAggregate } from './cart-count-aggregate.output';
import { CartAvgAggregate } from './cart-avg-aggregate.output';
import { CartSumAggregate } from './cart-sum-aggregate.output';
import { CartMinAggregate } from './cart-min-aggregate.output';
import { CartMaxAggregate } from './cart-max-aggregate.output';

@ObjectType()
export class AggregateCart {

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
