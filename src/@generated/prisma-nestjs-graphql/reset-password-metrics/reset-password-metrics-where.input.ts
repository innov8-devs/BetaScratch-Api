import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ResetPasswordMetricsWhereInput {

    @Field(() => [ResetPasswordMetricsWhereInput], {nullable:true})
    AND?: Array<ResetPasswordMetricsWhereInput>;

    @Field(() => [ResetPasswordMetricsWhereInput], {nullable:true})
    OR?: Array<ResetPasswordMetricsWhereInput>;

    @Field(() => [ResetPasswordMetricsWhereInput], {nullable:true})
    NOT?: Array<ResetPasswordMetricsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
