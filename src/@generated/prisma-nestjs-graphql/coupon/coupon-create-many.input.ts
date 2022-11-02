import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { COUPON_TYPE } from '../prisma/coupon-type.enum';

@InputType()
export class CouponCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    code!: string;

    @Field(() => Boolean, {nullable:false})
    @Validator.IsBoolean()
    validity!: boolean;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => COUPON_TYPE, {nullable:false})
    type!: keyof typeof COUPON_TYPE;

    @Field(() => Int, {nullable:true})
    percentage?: number;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
