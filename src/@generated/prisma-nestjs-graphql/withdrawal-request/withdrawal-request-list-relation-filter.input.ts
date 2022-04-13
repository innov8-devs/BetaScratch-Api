import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalRequestWhereInput } from './withdrawal-request-where.input';

@InputType()
export class WithdrawalRequestListRelationFilter {

    @Field(() => WithdrawalRequestWhereInput, {nullable:true})
    every?: WithdrawalRequestWhereInput;

    @Field(() => WithdrawalRequestWhereInput, {nullable:true})
    some?: WithdrawalRequestWhereInput;

    @Field(() => WithdrawalRequestWhereInput, {nullable:true})
    none?: WithdrawalRequestWhereInput;
}
