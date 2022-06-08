import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class GameScalarWhereWithAggregatesInput {

    @Field(() => [GameScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GameScalarWhereWithAggregatesInput>;

    @Field(() => [GameScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GameScalarWhereWithAggregatesInput>;

    @Field(() => [GameScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GameScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    imageUrl?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    gameId?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    price?: JsonWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    category?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    availability?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
