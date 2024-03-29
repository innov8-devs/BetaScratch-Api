import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CouponSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    percentage?: true;

    @Field(() => Boolean, {nullable:true})
    cappedAmount?: true;

    @Field(() => Boolean, {nullable:true})
    quantityCount?: true;

    @Field(() => Boolean, {nullable:true})
    quantityUsed?: true;

    @Field(() => Boolean, {nullable:true})
    purchaseId?: true;
}
