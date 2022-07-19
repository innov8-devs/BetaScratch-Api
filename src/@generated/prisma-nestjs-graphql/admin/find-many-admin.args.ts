import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';
import { AdminOrderByWithRelationAndSearchRelevanceInput } from './admin-order-by-with-relation-and-search-relevance.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminScalarFieldEnum } from './admin-scalar-field.enum';

@ArgsType()
export class FindManyAdminArgs {

    @Field(() => AdminWhereInput, {nullable:true})
    where?: AdminWhereInput;

    @Field(() => [AdminOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<AdminOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    cursor?: AdminWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdminScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdminScalarFieldEnum>;
}
