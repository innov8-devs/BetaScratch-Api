import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OtpCountOrderByAggregateInput } from './otp-count-order-by-aggregate.input';
import { OtpAvgOrderByAggregateInput } from './otp-avg-order-by-aggregate.input';
import { OtpMaxOrderByAggregateInput } from './otp-max-order-by-aggregate.input';
import { OtpMinOrderByAggregateInput } from './otp-min-order-by-aggregate.input';
import { OtpSumOrderByAggregateInput } from './otp-sum-order-by-aggregate.input';

@InputType()
export class OtpOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subject?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expire?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobileNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    adminId?: keyof typeof SortOrder;

    @Field(() => OtpCountOrderByAggregateInput, {nullable:true})
    _count?: OtpCountOrderByAggregateInput;

    @Field(() => OtpAvgOrderByAggregateInput, {nullable:true})
    _avg?: OtpAvgOrderByAggregateInput;

    @Field(() => OtpMaxOrderByAggregateInput, {nullable:true})
    _max?: OtpMaxOrderByAggregateInput;

    @Field(() => OtpMinOrderByAggregateInput, {nullable:true})
    _min?: OtpMinOrderByAggregateInput;

    @Field(() => OtpSumOrderByAggregateInput, {nullable:true})
    _sum?: OtpSumOrderByAggregateInput;
}
