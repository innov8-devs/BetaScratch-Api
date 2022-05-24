import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferralWhereInput } from './referral-where.input';
import { ReferralOrderByWithRelationInput } from './referral-order-by-with-relation.input';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReferralCountAggregateInput } from './referral-count-aggregate.input';
import { ReferralAvgAggregateInput } from './referral-avg-aggregate.input';
import { ReferralSumAggregateInput } from './referral-sum-aggregate.input';
import { ReferralMinAggregateInput } from './referral-min-aggregate.input';
import { ReferralMaxAggregateInput } from './referral-max-aggregate.input';

@ArgsType()
export class ReferralAggregateArgs {

    @Field(() => ReferralWhereInput, {nullable:true})
    where?: ReferralWhereInput;

    @Field(() => [ReferralOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReferralOrderByWithRelationInput>;

    @Field(() => ReferralWhereUniqueInput, {nullable:true})
    cursor?: ReferralWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReferralCountAggregateInput, {nullable:true})
    _count?: ReferralCountAggregateInput;

    @Field(() => ReferralAvgAggregateInput, {nullable:true})
    _avg?: ReferralAvgAggregateInput;

    @Field(() => ReferralSumAggregateInput, {nullable:true})
    _sum?: ReferralSumAggregateInput;

    @Field(() => ReferralMinAggregateInput, {nullable:true})
    _min?: ReferralMinAggregateInput;

    @Field(() => ReferralMaxAggregateInput, {nullable:true})
    _max?: ReferralMaxAggregateInput;
}
