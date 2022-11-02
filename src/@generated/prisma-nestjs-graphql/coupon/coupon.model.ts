import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { COUPON_TYPE } from '../prisma/coupon-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Coupon {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Boolean, {nullable:false})
    validity!: boolean;

    @Field(() => Date, {nullable:false})
    expire!: Date;

    @Field(() => COUPON_TYPE, {nullable:false})
    type!: keyof typeof COUPON_TYPE;

    @Field(() => Int, {nullable:true})
    percentage!: number | null;

    @Field(() => Int, {nullable:true})
    amount!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
