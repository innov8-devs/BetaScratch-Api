import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenUpdateWithoutUserInput } from './token-update-without-user.input';

@InputType()
export class TokenUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    where!: TokenWhereUniqueInput;

    @Field(() => TokenUpdateWithoutUserInput, {nullable:false})
    data!: TokenUpdateWithoutUserInput;
}
