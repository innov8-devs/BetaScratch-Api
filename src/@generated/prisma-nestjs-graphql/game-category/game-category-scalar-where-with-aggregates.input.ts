import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class GameCategoryScalarWhereWithAggregatesInput {

    @Field(() => [GameCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GameCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [GameCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GameCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [GameCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GameCategoryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categoryName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categoryLabel?: StringWithAggregatesFilter;
}
