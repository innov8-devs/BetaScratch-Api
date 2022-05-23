import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RefferalCountOrderByAggregateInput } from './refferal-count-order-by-aggregate.input';
import { RefferalAvgOrderByAggregateInput } from './refferal-avg-order-by-aggregate.input';
import { RefferalMaxOrderByAggregateInput } from './refferal-max-order-by-aggregate.input';
import { RefferalMinOrderByAggregateInput } from './refferal-min-order-by-aggregate.input';
import { RefferalSumOrderByAggregateInput } from './refferal-sum-order-by-aggregate.input';

@InputType()
export class RefferalOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referrals?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RefferalCountOrderByAggregateInput, {nullable:true})
    _count?: RefferalCountOrderByAggregateInput;

    @Field(() => RefferalAvgOrderByAggregateInput, {nullable:true})
    _avg?: RefferalAvgOrderByAggregateInput;

    @Field(() => RefferalMaxOrderByAggregateInput, {nullable:true})
    _max?: RefferalMaxOrderByAggregateInput;

    @Field(() => RefferalMinOrderByAggregateInput, {nullable:true})
    _min?: RefferalMinOrderByAggregateInput;

    @Field(() => RefferalSumOrderByAggregateInput, {nullable:true})
    _sum?: RefferalSumOrderByAggregateInput;
}
