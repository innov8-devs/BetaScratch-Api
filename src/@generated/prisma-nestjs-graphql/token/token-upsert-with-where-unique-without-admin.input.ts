import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenUpdateWithoutAdminInput } from './token-update-without-admin.input';
import { TokenCreateWithoutAdminInput } from './token-create-without-admin.input';

@InputType()
export class TokenUpsertWithWhereUniqueWithoutAdminInput {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    where!: TokenWhereUniqueInput;

    @Field(() => TokenUpdateWithoutAdminInput, {nullable:false})
    update!: TokenUpdateWithoutAdminInput;

    @Field(() => TokenCreateWithoutAdminInput, {nullable:false})
    create!: TokenCreateWithoutAdminInput;
}
