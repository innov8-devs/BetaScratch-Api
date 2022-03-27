import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenCreateInput } from './token-create.input';
import { TokenUpdateInput } from './token-update.input';

@ArgsType()
export class UpsertOneTokenArgs {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    where!: TokenWhereUniqueInput;

    @Field(() => TokenCreateInput, {nullable:false})
    create!: TokenCreateInput;

    @Field(() => TokenUpdateInput, {nullable:false})
    update!: TokenUpdateInput;
}
