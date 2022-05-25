import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReferralCountOrderByAggregateInput } from './referral-count-order-by-aggregate.input';
import { ReferralAvgOrderByAggregateInput } from './referral-avg-order-by-aggregate.input';
import { ReferralMaxOrderByAggregateInput } from './referral-max-order-by-aggregate.input';
import { ReferralMinOrderByAggregateInput } from './referral-min-order-by-aggregate.input';
import { ReferralSumOrderByAggregateInput } from './referral-sum-order-by-aggregate.input';

@InputType()
export class ReferralOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referrals?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    invitesFunded?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalEarned?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ReferralCountOrderByAggregateInput, {nullable:true})
    _count?: ReferralCountOrderByAggregateInput;

    @Field(() => ReferralAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReferralAvgOrderByAggregateInput;

    @Field(() => ReferralMaxOrderByAggregateInput, {nullable:true})
    _max?: ReferralMaxOrderByAggregateInput;

    @Field(() => ReferralMinOrderByAggregateInput, {nullable:true})
    _min?: ReferralMinOrderByAggregateInput;

    @Field(() => ReferralSumOrderByAggregateInput, {nullable:true})
    _sum?: ReferralSumOrderByAggregateInput;
}
