import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OtpCountAggregate } from './otp-count-aggregate.output';
import { OtpAvgAggregate } from './otp-avg-aggregate.output';
import { OtpSumAggregate } from './otp-sum-aggregate.output';
import { OtpMinAggregate } from './otp-min-aggregate.output';
import { OtpMaxAggregate } from './otp-max-aggregate.output';

@ObjectType()
export class AggregateOtp {

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
