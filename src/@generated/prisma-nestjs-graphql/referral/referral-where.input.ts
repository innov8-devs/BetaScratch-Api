import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReferralWhereInput {

    @Field(() => [ReferralWhereInput], {nullable:true})
    AND?: Array<ReferralWhereInput>;

    @Field(() => [ReferralWhereInput], {nullable:true})
    OR?: Array<ReferralWhereInput>;

    @Field(() => [ReferralWhereInput], {nullable:true})
    NOT?: Array<ReferralWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    referrals?: IntNullableListFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    invitesFunded?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    totalEarned?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
