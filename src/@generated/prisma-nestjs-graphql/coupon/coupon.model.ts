import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Coupon {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    percentage!: number;

    @Field(() => Boolean, {nullable:false})
    status!: boolean;

    @Field(() => Boolean, {nullable:false})
    cap!: boolean;

    @Field(() => Int, {nullable:false})
    capAmount!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Boolean, {nullable:false})
    validity!: boolean;

    @Field(() => Date, {nullable:false})
    expire!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
