import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { COUPON_QUANTITY } from '../prisma/coupon-quantity.enum';

@InputType()
export class CouponCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    percentage!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    status!: string;

    @Field(() => Boolean, {nullable:false})
    @Validator.IsBoolean()
    capped!: boolean;

    @Field(() => Int, {nullable:false})
    cappedAmount!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    code!: string;

    @Field(() => String, {nullable:false})
    expires!: string;

    @Field(() => COUPON_QUANTITY, {nullable:false})
    quantity!: keyof typeof COUPON_QUANTITY;

    @Field(() => Int, {nullable:true})
    quantityCount?: number;

    @Field(() => Int, {nullable:true})
    quantityUsed?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    purchaseId?: number;
}
