import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutOtpInput } from './admin-create-without-otp.input';
import { AdminCreateOrConnectWithoutOtpInput } from './admin-create-or-connect-without-otp.input';
import { AdminUpsertWithoutOtpInput } from './admin-upsert-without-otp.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminUpdateWithoutOtpInput } from './admin-update-without-otp.input';

@InputType()
export class AdminUpdateOneWithoutOtpNestedInput {

    @Field(() => AdminCreateWithoutOtpInput, {nullable:true})
    create?: AdminCreateWithoutOtpInput;

    @Field(() => AdminCreateOrConnectWithoutOtpInput, {nullable:true})
    connectOrCreate?: AdminCreateOrConnectWithoutOtpInput;

    @Field(() => AdminUpsertWithoutOtpInput, {nullable:true})
    upsert?: AdminUpsertWithoutOtpInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    connect?: AdminWhereUniqueInput;

    @Field(() => AdminUpdateWithoutOtpInput, {nullable:true})
    update?: AdminUpdateWithoutOtpInput;
}
