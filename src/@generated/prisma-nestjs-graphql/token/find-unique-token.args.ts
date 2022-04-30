import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';

@ArgsType()
export class FindUniqueTokenArgs {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    where!: TokenWhereUniqueInput;
}
