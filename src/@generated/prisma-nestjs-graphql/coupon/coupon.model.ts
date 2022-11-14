import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { COUPON_QUANTITY } from '../prisma/coupon-quantity.enum';
import { Purchase } from '../purchase/purchase.model';

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

    @Field(() => Int, {nullable:true})
    quantityCount!: number | null;

    @Field(() => Int, {nullable:true,defaultValue:0})
    quantityUsed!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Purchase, {nullable:true})
    purchase?: Purchase | null;

    @Field(() => Int, {nullable:true})
    purchaseId!: number | null;
}
