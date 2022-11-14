import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PurchaseOrderByWithRelationAndSearchRelevanceInput } from '../purchase/purchase-order-by-with-relation-and-search-relevance.input';
import { CouponOrderByRelevanceInput } from './coupon-order-by-relevance.input';

@InputType()
export class CouponOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => PurchaseOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    purchase?: PurchaseOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    purchaseId?: keyof typeof SortOrder;

    @Field(() => CouponOrderByRelevanceInput, {nullable:true})
    _relevance?: CouponOrderByRelevanceInput;
}
