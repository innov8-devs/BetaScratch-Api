import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOtpInput } from './user-update-without-otp.input';
import { UserCreateWithoutOtpInput } from './user-create-without-otp.input';

@InputType()
export class UserUpsertWithoutOtpInput {

    @Field(() => UserUpdateWithoutOtpInput, {nullable:false})
    update!: UserUpdateWithoutOtpInput;

    @Field(() => UserCreateWithoutOtpInput, {nullable:false})
    create!: UserCreateWithoutOtpInput;
}
