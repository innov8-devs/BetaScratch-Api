import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutMessageInput } from './user-create-without-message.input';

@InputType()
export class UserCreateOrConnectWithoutMessageInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMessageInput, {nullable:false})
    create!: UserCreateWithoutMessageInput;
}
