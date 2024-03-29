import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CouponOrderByRelevanceFieldEnum } from './coupon-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CouponOrderByRelevanceInput {

    @Field(() => [CouponOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof CouponOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
