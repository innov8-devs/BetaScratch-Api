import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { COUPON_QUANTITY } from '../prisma/coupon-quantity.enum';

@ObjectType()
export class Coupon {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    percentage!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Boolean, {nullable:false})
    capped!: boolean;

    @Field(() => Int, {nullable:false})
    cappedAmount!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Int, {nullable:false})
    expires!: number;

    @Field(() => COUPON_QUANTITY, {nullable:false})
    quantity!: keyof typeof COUPON_QUANTITY;

    @Field(() => Int, {nullable:false})
    quantityCount!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
