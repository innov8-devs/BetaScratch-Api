import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenWhereInput } from './token-where.input';
import { TokenOrderByWithRelationAndSearchRelevanceInput } from './token-order-by-with-relation-and-search-relevance.input';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TokenScalarFieldEnum } from './token-scalar-field.enum';

@ArgsType()
export class FindManyTokenArgs {

    @Field(() => TokenWhereInput, {nullable:true})
    where?: TokenWhereInput;

    @Field(() => [TokenOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<TokenOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => TokenWhereUniqueInput, {nullable:true})
    cursor?: TokenWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TokenScalarFieldEnum>;
}
