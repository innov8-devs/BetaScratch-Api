import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameWhereInput } from './game-where.input';
import { GameOrderByWithRelationAndSearchRelevanceInput } from './game-order-by-with-relation-and-search-relevance.input';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameScalarFieldEnum } from './game-scalar-field.enum';

@ArgsType()
export class FindFirstGameArgs {

    @Field(() => GameWhereInput, {nullable:true})
    where?: GameWhereInput;

    @Field(() => [GameOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<GameOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    cursor?: GameWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GameScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GameScalarFieldEnum>;
}
