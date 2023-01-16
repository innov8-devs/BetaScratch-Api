import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumRAFFLE_TYPEWithAggregatesFilter } from '../prisma/enum-raffle-type-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumTRANSACTION_TYPEWithAggregatesFilter } from '../prisma/enum-transaction-type-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class StakedRaffleTicketsScalarWhereWithAggregatesInput {

    @Field(() => [StakedRaffleTicketsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StakedRaffleTicketsScalarWhereWithAggregatesInput>;

    @Field(() => [StakedRaffleTicketsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StakedRaffleTicketsScalarWhereWithAggregatesInput>;

    @Field(() => [StakedRaffleTicketsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StakedRaffleTicketsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => EnumRAFFLE_TYPEWithAggregatesFilter, {nullable:true})
    type?: EnumRAFFLE_TYPEWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    originalNumbers?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sortedNumbers?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    reference?: StringNullableWithAggregatesFilter;

    @Field(() => EnumTRANSACTION_TYPEWithAggregatesFilter, {nullable:true})
    transactionType?: EnumTRANSACTION_TYPEWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isPaid?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
