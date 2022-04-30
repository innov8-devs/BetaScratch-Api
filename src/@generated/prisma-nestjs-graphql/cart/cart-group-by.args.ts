import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartWhereInput } from './cart-where.input';
import { CartOrderByWithAggregationInput } from './cart-order-by-with-aggregation.input';
import { CartScalarFieldEnum } from './cart-scalar-field.enum';
import { CartScalarWhereWithAggregatesInput } from './cart-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CartCountAggregateInput } from './cart-count-aggregate.input';
import { CartAvgAggregateInput } from './cart-avg-aggregate.input';
import { CartSumAggregateInput } from './cart-sum-aggregate.input';
import { CartMinAggregateInput } from './cart-min-aggregate.input';
import { CartMaxAggregateInput } from './cart-max-aggregate.input';

@ArgsType()
export class CartGroupByArgs {

    @Field(() => CartWhereInput, {nullable:true})
    where?: CartWhereInput;

    @Field(() => [CartOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CartOrderByWithAggregationInput>;

    @Field(() => [CartScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CartScalarFieldEnum>;

    @Field(() => CartScalarWhereWithAggregatesInput, {nullable:true})
    having?: CartScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CartCountAggregateInput, {nullable:true})
    _count?: CartCountAggregateInput;

    @Field(() => CartAvgAggregateInput, {nullable:true})
    _avg?: CartAvgAggregateInput;

    @Field(() => CartSumAggregateInput, {nullable:true})
    _sum?: CartSumAggregateInput;

    @Field(() => CartMinAggregateInput, {nullable:true})
    _min?: CartMinAggregateInput;

    @Field(() => CartMaxAggregateInput, {nullable:true})
    _max?: CartMaxAggregateInput;
}
