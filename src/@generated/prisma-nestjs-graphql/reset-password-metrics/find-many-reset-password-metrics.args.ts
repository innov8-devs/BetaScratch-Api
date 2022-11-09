import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResetPasswordMetricsWhereInput } from './reset-password-metrics-where.input';
import { ResetPasswordMetricsOrderByWithRelationAndSearchRelevanceInput } from './reset-password-metrics-order-by-with-relation-and-search-relevance.input';
import { ResetPasswordMetricsWhereUniqueInput } from './reset-password-metrics-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ResetPasswordMetricsScalarFieldEnum } from './reset-password-metrics-scalar-field.enum';

@ArgsType()
export class FindManyResetPasswordMetricsArgs {

    @Field(() => ResetPasswordMetricsWhereInput, {nullable:true})
    where?: ResetPasswordMetricsWhereInput;

    @Field(() => [ResetPasswordMetricsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ResetPasswordMetricsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ResetPasswordMetricsWhereUniqueInput, {nullable:true})
    cursor?: ResetPasswordMetricsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ResetPasswordMetricsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ResetPasswordMetricsScalarFieldEnum>;
}
