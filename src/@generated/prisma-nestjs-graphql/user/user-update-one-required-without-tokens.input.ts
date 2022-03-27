import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTokensInput } from './user-create-without-tokens.input';
import { UserCreateOrConnectWithoutTokensInput } from './user-create-or-connect-without-tokens.input';
import { UserUpsertWithoutTokensInput } from './user-upsert-without-tokens.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTokensInput } from './user-update-without-tokens.input';

@InputType()
export class UserUpdateOneRequiredWithoutTokensInput {

    @Field(() => UserCreateWithoutTokensInput, {nullable:true})
    create?: UserCreateWithoutTokensInput;

    @Field(() => UserCreateOrConnectWithoutTokensInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput;

    @Field(() => UserUpsertWithoutTokensInput, {nullable:true})
    upsert?: UserUpsertWithoutTokensInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTokensInput, {nullable:true})
    update?: UserUpdateWithoutTokensInput;
}
