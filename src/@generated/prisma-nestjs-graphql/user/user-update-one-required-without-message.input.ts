import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessageInput } from './user-create-without-message.input';
import { UserCreateOrConnectWithoutMessageInput } from './user-create-or-connect-without-message.input';
import { UserUpsertWithoutMessageInput } from './user-upsert-without-message.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutMessageInput } from './user-update-without-message.input';

@InputType()
export class UserUpdateOneRequiredWithoutMessageInput {

    @Field(() => UserCreateWithoutMessageInput, {nullable:true})
    create?: UserCreateWithoutMessageInput;

    @Field(() => UserCreateOrConnectWithoutMessageInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutMessageInput;

    @Field(() => UserUpsertWithoutMessageInput, {nullable:true})
    upsert?: UserUpsertWithoutMessageInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMessageInput, {nullable:true})
    update?: UserUpdateWithoutMessageInput;
}
