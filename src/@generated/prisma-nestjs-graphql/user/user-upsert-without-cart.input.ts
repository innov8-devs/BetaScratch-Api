import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCartInput } from './user-update-without-cart.input';
import { UserCreateWithoutCartInput } from './user-create-without-cart.input';

@InputType()
export class UserUpsertWithoutCartInput {

    @Field(() => UserUpdateWithoutCartInput, {nullable:false})
    update!: UserUpdateWithoutCartInput;

    @Field(() => UserCreateWithoutCartInput, {nullable:false})
    create!: UserCreateWithoutCartInput;
}
