import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { COUPON_TYPE } from '../prisma/coupon-type.enum';

@ObjectType()
export class CouponMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => Boolean, {nullable:true})
    validity?: boolean;

    @Field(() => Date, {nullable:true})
    expire?: Date | string;

    @Field(() => COUPON_TYPE, {nullable:true})
    type?: keyof typeof COUPON_TYPE;

    @Field(() => Int, {nullable:true})
    percentage?: number;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
