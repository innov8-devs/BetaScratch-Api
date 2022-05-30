import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTokenInput } from './user-update-without-token.input';
import { UserCreateWithoutTokenInput } from './user-create-without-token.input';

@InputType()
export class UserUpsertWithoutTokenInput {

    @Field(() => UserUpdateWithoutTokenInput, {nullable:false})
    update!: UserUpdateWithoutTokenInput;

    @Field(() => UserCreateWithoutTokenInput, {nullable:false})
    create!: UserCreateWithoutTokenInput;
}
