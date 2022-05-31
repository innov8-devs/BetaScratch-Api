import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenCreateWithoutAdminInput } from './token-create-without-admin.input';

@InputType()
export class TokenCreateOrConnectWithoutAdminInput {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    where!: TokenWhereUniqueInput;

    @Field(() => TokenCreateWithoutAdminInput, {nullable:false})
    create!: TokenCreateWithoutAdminInput;
}
