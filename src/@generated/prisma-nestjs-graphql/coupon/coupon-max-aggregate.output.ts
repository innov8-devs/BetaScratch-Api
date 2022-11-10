import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { COUPON_QUANTITY } from '../prisma/coupon-quantity.enum';

@ObjectType()
export class CouponMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    percentage?: number;

    @Field(() => Boolean, {nullable:true})
    status?: boolean;

    @Field(() => Boolean, {nullable:true})
    capped?: boolean;

    @Field(() => Int, {nullable:true})
    cappedAmount?: number;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => Int, {nullable:true})
    expires?: number;

    @Field(() => COUPON_QUANTITY, {nullable:true})
    quantity?: keyof typeof COUPON_QUANTITY;

    @Field(() => Int, {nullable:true})
    quantityCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
