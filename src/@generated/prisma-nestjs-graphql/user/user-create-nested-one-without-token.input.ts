import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTokenInput } from './user-create-without-token.input';
import { UserCreateOrConnectWithoutTokenInput } from './user-create-or-connect-without-token.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTokenInput {

    @Field(() => UserCreateWithoutTokenInput, {nullable:true})
    create?: UserCreateWithoutTokenInput;

    @Field(() => UserCreateOrConnectWithoutTokenInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
