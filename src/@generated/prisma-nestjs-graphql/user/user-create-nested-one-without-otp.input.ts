import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOtpInput } from './user-create-without-otp.input';
import { UserCreateOrConnectWithoutOtpInput } from './user-create-or-connect-without-otp.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOtpInput {

    @Field(() => UserCreateWithoutOtpInput, {nullable:true})
    create?: UserCreateWithoutOtpInput;

    @Field(() => UserCreateOrConnectWithoutOtpInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutOtpInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
