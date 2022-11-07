import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class CouponUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    percentage!: number;

    @Field(() => Boolean, {nullable:false})
    @Validator.IsBoolean()
    status!: boolean;

    @Field(() => Boolean, {nullable:false})
    @Validator.IsBoolean()
    cap!: boolean;

    @Field(() => Int, {nullable:false})
    capAmount!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    code!: string;

    @Field(() => Boolean, {nullable:false})
    @Validator.IsBoolean()
    validity!: boolean;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
