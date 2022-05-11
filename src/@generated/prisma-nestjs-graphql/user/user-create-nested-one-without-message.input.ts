import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessageInput } from './user-create-without-message.input';
import { UserCreateOrConnectWithoutMessageInput } from './user-create-or-connect-without-message.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMessageInput {

    @Field(() => UserCreateWithoutMessageInput, {nullable:true})
    create?: UserCreateWithoutMessageInput;

    @Field(() => UserCreateOrConnectWithoutMessageInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutMessageInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
