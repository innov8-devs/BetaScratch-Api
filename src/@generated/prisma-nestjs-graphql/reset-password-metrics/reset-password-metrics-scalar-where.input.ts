import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ResetPasswordMetricsScalarWhereInput {

    @Field(() => [ResetPasswordMetricsScalarWhereInput], {nullable:true})
    AND?: Array<ResetPasswordMetricsScalarWhereInput>;

    @Field(() => [ResetPasswordMetricsScalarWhereInput], {nullable:true})
    OR?: Array<ResetPasswordMetricsScalarWhereInput>;

    @Field(() => [ResetPasswordMetricsScalarWhereInput], {nullable:true})
    NOT?: Array<ResetPasswordMetricsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
