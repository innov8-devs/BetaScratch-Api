import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RefferalScalarWhereWithAggregatesInput {

    @Field(() => [RefferalScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RefferalScalarWhereWithAggregatesInput>;

    @Field(() => [RefferalScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RefferalScalarWhereWithAggregatesInput>;

    @Field(() => [RefferalScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RefferalScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    referrals?: StringNullableListFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
