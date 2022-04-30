import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutOtpInput } from './user-create-without-otp.input';

@InputType()
export class UserCreateOrConnectWithoutOtpInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutOtpInput, {nullable:false})
    create!: UserCreateWithoutOtpInput;
}
