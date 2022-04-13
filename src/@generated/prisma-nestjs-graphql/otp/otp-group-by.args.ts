import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpWhereInput } from './otp-where.input';
import { OtpOrderByWithAggregationInput } from './otp-order-by-with-aggregation.input';
import { OtpScalarFieldEnum } from './otp-scalar-field.enum';
import { OtpScalarWhereWithAggregatesInput } from './otp-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OtpCountAggregateInput } from './otp-count-aggregate.input';
import { OtpAvgAggregateInput } from './otp-avg-aggregate.input';
import { OtpSumAggregateInput } from './otp-sum-aggregate.input';
import { OtpMinAggregateInput } from './otp-min-aggregate.input';
import { OtpMaxAggregateInput } from './otp-max-aggregate.input';

@ArgsType()
export class OtpGroupByArgs {

    @Field(() => OtpWhereInput, {nullable:true})
    where?: OtpWhereInput;

    @Field(() => [OtpOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OtpOrderByWithAggregationInput>;

    @Field(() => [OtpScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OtpScalarFieldEnum>;

    @Field(() => OtpScalarWhereWithAggregatesInput, {nullable:true})
    having?: OtpScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OtpCountAggregateInput, {nullable:true})
    _count?: OtpCountAggregateInput;

    @Field(() => OtpAvgAggregateInput, {nullable:true})
    _avg?: OtpAvgAggregateInput;

    @Field(() => OtpSumAggregateInput, {nullable:true})
    _sum?: OtpSumAggregateInput;

    @Field(() => OtpMinAggregateInput, {nullable:true})
    _min?: OtpMinAggregateInput;

    @Field(() => OtpMaxAggregateInput, {nullable:true})
    _max?: OtpMaxAggregateInput;
}
