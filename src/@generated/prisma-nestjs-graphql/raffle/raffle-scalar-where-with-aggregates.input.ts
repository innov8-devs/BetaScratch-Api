import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumRAFFLE_TYPEWithAggregatesFilter } from '../prisma/enum-raffle-type-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RaffleScalarWhereWithAggregatesInput {

    @Field(() => [RaffleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RaffleScalarWhereWithAggregatesInput>;

    @Field(() => [RaffleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RaffleScalarWhereWithAggregatesInput>;

    @Field(() => [RaffleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RaffleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => EnumRAFFLE_TYPEWithAggregatesFilter, {nullable:true})
    type?: EnumRAFFLE_TYPEWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    win?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stake?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiriy?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
