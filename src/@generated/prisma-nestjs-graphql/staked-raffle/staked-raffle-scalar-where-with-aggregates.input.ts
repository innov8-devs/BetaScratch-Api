import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumRAFFLE_TYPEWithAggregatesFilter } from '../prisma/enum-raffle-type-with-aggregates-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class StakedRaffleScalarWhereWithAggregatesInput {

    @Field(() => [StakedRaffleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StakedRaffleScalarWhereWithAggregatesInput>;

    @Field(() => [StakedRaffleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StakedRaffleScalarWhereWithAggregatesInput>;

    @Field(() => [StakedRaffleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StakedRaffleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => EnumRAFFLE_TYPEWithAggregatesFilter, {nullable:true})
    type?: EnumRAFFLE_TYPEWithAggregatesFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    numbers?: IntNullableListFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
