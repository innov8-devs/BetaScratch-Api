import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ReferralScalarWhereWithAggregatesInput {

    @Field(() => [ReferralScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReferralScalarWhereWithAggregatesInput>;

    @Field(() => [ReferralScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReferralScalarWhereWithAggregatesInput>;

    @Field(() => [ReferralScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReferralScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    referrals?: IntNullableListFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    invitesFunded?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    totalEarned?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
