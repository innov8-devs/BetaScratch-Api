import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartWhereInput } from './cart-where.input';
import { CartOrderByWithRelationAndSearchRelevanceInput } from './cart-order-by-with-relation-and-search-relevance.input';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CartScalarFieldEnum } from './cart-scalar-field.enum';

@ArgsType()
export class FindManyCartArgs {

    @Field(() => CartWhereInput, {nullable:true})
    where?: CartWhereInput;

    @Field(() => [CartOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<CartOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => CartWhereUniqueInput, {nullable:true})
    cursor?: CartWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CartScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CartScalarFieldEnum>;
}
