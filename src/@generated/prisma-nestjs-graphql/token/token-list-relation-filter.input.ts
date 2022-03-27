import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenWhereInput } from './token-where.input';

@InputType()
export class TokenListRelationFilter {

    @Field(() => TokenWhereInput, {nullable:true})
    every?: TokenWhereInput;

    @Field(() => TokenWhereInput, {nullable:true})
    some?: TokenWhereInput;

    @Field(() => TokenWhereInput, {nullable:true})
    none?: TokenWhereInput;
}
