import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenUpdateInput } from './token-update.input';
import { TokenWhereUniqueInput } from './token-where-unique.input';

@ArgsType()
export class UpdateOneTokenArgs {

    @Field(() => TokenUpdateInput, {nullable:false})
    data!: TokenUpdateInput;

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    where!: TokenWhereUniqueInput;
}
