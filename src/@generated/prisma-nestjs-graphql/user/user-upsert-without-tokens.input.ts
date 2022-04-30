import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTokensInput } from './user-update-without-tokens.input';
import { UserCreateWithoutTokensInput } from './user-create-without-tokens.input';

@InputType()
export class UserUpsertWithoutTokensInput {

    @Field(() => UserUpdateWithoutTokensInput, {nullable:false})
    update!: UserUpdateWithoutTokensInput;

    @Field(() => UserCreateWithoutTokensInput, {nullable:false})
    create!: UserCreateWithoutTokensInput;
}
