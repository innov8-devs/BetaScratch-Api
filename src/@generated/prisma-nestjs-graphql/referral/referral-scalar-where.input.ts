import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReferralScalarWhereInput {

    @Field(() => [ReferralScalarWhereInput], {nullable:true})
    AND?: Array<ReferralScalarWhereInput>;

    @Field(() => [ReferralScalarWhereInput], {nullable:true})
    OR?: Array<ReferralScalarWhereInput>;

    @Field(() => [ReferralScalarWhereInput], {nullable:true})
    NOT?: Array<ReferralScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    referrals?: IntNullableListFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
