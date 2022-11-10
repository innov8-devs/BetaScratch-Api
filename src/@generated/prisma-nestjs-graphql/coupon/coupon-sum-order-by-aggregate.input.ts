import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CouponSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    percentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cappedAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantityCount?: keyof typeof SortOrder;
}
