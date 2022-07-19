import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalRequestWhereInput } from './withdrawal-request-where.input';
import { WithdrawalRequestOrderByWithRelationAndSearchRelevanceInput } from './withdrawal-request-order-by-with-relation-and-search-relevance.input';
import { WithdrawalRequestWhereUniqueInput } from './withdrawal-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WithdrawalRequestScalarFieldEnum } from './withdrawal-request-scalar-field.enum';

@ArgsType()
export class FindFirstWithdrawalRequestArgs {

    @Field(() => WithdrawalRequestWhereInput, {nullable:true})
    where?: WithdrawalRequestWhereInput;

    @Field(() => [WithdrawalRequestOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<WithdrawalRequestOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => WithdrawalRequestWhereUniqueInput, {nullable:true})
    cursor?: WithdrawalRequestWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WithdrawalRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WithdrawalRequestScalarFieldEnum>;
}
