import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResetPasswordMetricsWhereInput } from './reset-password-metrics-where.input';

@InputType()
export class ResetPasswordMetricsListRelationFilter {

    @Field(() => ResetPasswordMetricsWhereInput, {nullable:true})
    every?: ResetPasswordMetricsWhereInput;

    @Field(() => ResetPasswordMetricsWhereInput, {nullable:true})
    some?: ResetPasswordMetricsWhereInput;

    @Field(() => ResetPasswordMetricsWhereInput, {nullable:true})
    none?: ResetPasswordMetricsWhereInput;
}
