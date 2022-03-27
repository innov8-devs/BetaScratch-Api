import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTokensInput } from './user-create-without-tokens.input';
import { UserCreateOrConnectWithoutTokensInput } from './user-create-or-connect-without-tokens.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTokensInput {

    @Field(() => UserCreateWithoutTokensInput, {nullable:true})
    create?: UserCreateWithoutTokensInput;

    @Field(() => UserCreateOrConnectWithoutTokensInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
