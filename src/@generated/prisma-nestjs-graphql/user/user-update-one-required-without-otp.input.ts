import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOtpInput } from './user-create-without-otp.input';
import { UserCreateOrConnectWithoutOtpInput } from './user-create-or-connect-without-otp.input';
import { UserUpsertWithoutOtpInput } from './user-upsert-without-otp.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutOtpInput } from './user-update-without-otp.input';

@InputType()
export class UserUpdateOneRequiredWithoutOtpInput {

    @Field(() => UserCreateWithoutOtpInput, {nullable:true})
    create?: UserCreateWithoutOtpInput;

    @Field(() => UserCreateOrConnectWithoutOtpInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutOtpInput;

    @Field(() => UserUpsertWithoutOtpInput, {nullable:true})
    upsert?: UserUpsertWithoutOtpInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutOtpInput, {nullable:true})
    update?: UserUpdateWithoutOtpInput;
}
