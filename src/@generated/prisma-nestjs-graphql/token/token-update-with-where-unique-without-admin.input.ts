import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenUpdateWithoutAdminInput } from './token-update-without-admin.input';

@InputType()
export class TokenUpdateWithWhereUniqueWithoutAdminInput {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    where!: TokenWhereUniqueInput;

    @Field(() => TokenUpdateWithoutAdminInput, {nullable:false})
    data!: TokenUpdateWithoutAdminInput;
}
