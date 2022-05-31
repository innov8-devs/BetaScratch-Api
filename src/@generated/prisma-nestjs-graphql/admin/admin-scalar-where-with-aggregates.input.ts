import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumROLEWithAggregatesFilter } from '../prisma/enum-role-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AdminScalarWhereWithAggregatesInput {

    @Field(() => [AdminScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdminScalarWhereWithAggregatesInput>;

    @Field(() => [AdminScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdminScalarWhereWithAggregatesInput>;

    @Field(() => [AdminScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdminScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: StringWithAggregatesFilter;

    @Field(() => EnumROLEWithAggregatesFilter, {nullable:true})
    role?: EnumROLEWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    mobileNumber?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    confirmed?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
