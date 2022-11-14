import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CouponCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    percentage!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    capped!: number;

    @Field(() => Int, {nullable:false})
    cappedAmount!: number;

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => Int, {nullable:false})
    expires!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Int, {nullable:false})
    quantityCount!: number;

    @Field(() => Int, {nullable:false})
    quantityUsed!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    purchaseId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
