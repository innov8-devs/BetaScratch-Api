import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenUpdateWithoutUserInput } from './token-update-without-user.input';
import { TokenCreateWithoutUserInput } from './token-create-without-user.input';

@InputType()
export class TokenUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    where!: TokenWhereUniqueInput;

    @Field(() => TokenUpdateWithoutUserInput, {nullable:false})
    update!: TokenUpdateWithoutUserInput;

    @Field(() => TokenCreateWithoutUserInput, {nullable:false})
    create!: TokenCreateWithoutUserInput;
}
