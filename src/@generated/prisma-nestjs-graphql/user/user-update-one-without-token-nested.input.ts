import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTokenInput } from './user-create-without-token.input';
import { UserCreateOrConnectWithoutTokenInput } from './user-create-or-connect-without-token.input';
import { UserUpsertWithoutTokenInput } from './user-upsert-without-token.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTokenInput } from './user-update-without-token.input';

@InputType()
export class UserUpdateOneWithoutTokenNestedInput {

    @Field(() => UserCreateWithoutTokenInput, {nullable:true})
    create?: UserCreateWithoutTokenInput;

    @Field(() => UserCreateOrConnectWithoutTokenInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput;

    @Field(() => UserUpsertWithoutTokenInput, {nullable:true})
    upsert?: UserUpsertWithoutTokenInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTokenInput, {nullable:true})
    update?: UserUpdateWithoutTokenInput;
}
