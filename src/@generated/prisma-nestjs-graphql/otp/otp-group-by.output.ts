import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OtpCountAggregate } from './otp-count-aggregate.output';
import { OtpAvgAggregate } from './otp-avg-aggregate.output';
import { OtpSumAggregate } from './otp-sum-aggregate.output';
import { OtpMinAggregate } from './otp-min-aggregate.output';
import { OtpMaxAggregate } from './otp-max-aggregate.output';

@ObjectType()
export class OtpGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => Boolean, {nullable:false})
    validity!: boolean;

    @Field(() => String, {nullable:false})
    mobileNumber!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => OtpCountAggregate, {nullable:true})
    _count?: OtpCountAggregate;

    @Field(() => OtpAvgAggregate, {nullable:true})
    _avg?: OtpAvgAggregate;

    @Field(() => OtpSumAggregate, {nullable:true})
    _sum?: OtpSumAggregate;

    @Field(() => OtpMinAggregate, {nullable:true})
    _min?: OtpMinAggregate;

    @Field(() => OtpMaxAggregate, {nullable:true})
    _max?: OtpMaxAggregate;
}
