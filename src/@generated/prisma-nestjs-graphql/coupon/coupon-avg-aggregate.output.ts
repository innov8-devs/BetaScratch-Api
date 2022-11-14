import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CouponAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    percentage?: number;

    @Field(() => Float, {nullable:true})
    cappedAmount?: number;

    @Field(() => Float, {nullable:true})
    expires?: number;

    @Field(() => Float, {nullable:true})
    quantityCount?: number;

    @Field(() => Float, {nullable:true})
    quantityUsed?: number;

    @Field(() => Float, {nullable:true})
    purchaseId?: number;
}
