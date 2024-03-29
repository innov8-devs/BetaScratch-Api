import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CouponCountOrderByAggregateInput } from './coupon-count-order-by-aggregate.input';
import { CouponAvgOrderByAggregateInput } from './coupon-avg-order-by-aggregate.input';
import { CouponMaxOrderByAggregateInput } from './coupon-max-order-by-aggregate.input';
import { CouponMinOrderByAggregateInput } from './coupon-min-order-by-aggregate.input';
import { CouponSumOrderByAggregateInput } from './coupon-sum-order-by-aggregate.input';

@InputType()
export class CouponOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    capped?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cappedAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantityCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantityUsed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    purchaseId?: keyof typeof SortOrder;

    @Field(() => CouponCountOrderByAggregateInput, {nullable:true})
    _count?: CouponCountOrderByAggregateInput;

    @Field(() => CouponAvgOrderByAggregateInput, {nullable:true})
    _avg?: CouponAvgOrderByAggregateInput;

    @Field(() => CouponMaxOrderByAggregateInput, {nullable:true})
    _max?: CouponMaxOrderByAggregateInput;

    @Field(() => CouponMinOrderByAggregateInput, {nullable:true})
    _min?: CouponMinOrderByAggregateInput;

    @Field(() => CouponSumOrderByAggregateInput, {nullable:true})
    _sum?: CouponSumOrderByAggregateInput;
}
