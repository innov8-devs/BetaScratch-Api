import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMessageInput } from './user-update-without-message.input';
import { UserCreateWithoutMessageInput } from './user-create-without-message.input';

@InputType()
export class UserUpsertWithoutMessageInput {

    @Field(() => UserUpdateWithoutMessageInput, {nullable:false})
    update!: UserUpdateWithoutMessageInput;

    @Field(() => UserCreateWithoutMessageInput, {nullable:false})
    create!: UserCreateWithoutMessageInput;
}
