import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCategoryWhereInput } from './game-category-where.input';
import { GameCategoryOrderByWithRelationAndSearchRelevanceInput } from './game-category-order-by-with-relation-and-search-relevance.input';
import { GameCategoryWhereUniqueInput } from './game-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameCategoryScalarFieldEnum } from './game-category-scalar-field.enum';

@ArgsType()
export class FindFirstGameCategoryArgs {

    @Field(() => GameCategoryWhereInput, {nullable:true})
    where?: GameCategoryWhereInput;

    @Field(() => [GameCategoryOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<GameCategoryOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => GameCategoryWhereUniqueInput, {nullable:true})
    cursor?: GameCategoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GameCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GameCategoryScalarFieldEnum>;
}
