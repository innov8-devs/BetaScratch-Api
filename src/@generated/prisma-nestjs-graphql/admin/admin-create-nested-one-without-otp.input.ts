import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutOtpInput } from './admin-create-without-otp.input';
import { AdminCreateOrConnectWithoutOtpInput } from './admin-create-or-connect-without-otp.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';

@InputType()
export class AdminCreateNestedOneWithoutOtpInput {

    @Field(() => AdminCreateWithoutOtpInput, {nullable:true})
    create?: AdminCreateWithoutOtpInput;

    @Field(() => AdminCreateOrConnectWithoutOtpInput, {nullable:true})
    connectOrCreate?: AdminCreateOrConnectWithoutOtpInput;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    connect?: AdminWhereUniqueInput;
}
