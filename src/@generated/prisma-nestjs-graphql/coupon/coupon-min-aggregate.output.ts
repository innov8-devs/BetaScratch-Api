import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CouponMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    percentage?: number;

    @Field(() => Boolean, {nullable:true})
    status?: boolean;

    @Field(() => Boolean, {nullable:true})
    cap?: boolean;

    @Field(() => Int, {nullable:true})
    capAmount?: number;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => Boolean, {nullable:true})
    validity?: boolean;

    @Field(() => Date, {nullable:true})
    expire?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
