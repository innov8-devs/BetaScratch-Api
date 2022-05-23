import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRefferalInput } from './user-update-without-refferal.input';
import { UserCreateWithoutRefferalInput } from './user-create-without-refferal.input';

@InputType()
export class UserUpsertWithoutRefferalInput {

    @Field(() => UserUpdateWithoutRefferalInput, {nullable:false})
    update!: UserUpdateWithoutRefferalInput;

    @Field(() => UserCreateWithoutRefferalInput, {nullable:false})
    create!: UserCreateWithoutRefferalInput;
}
