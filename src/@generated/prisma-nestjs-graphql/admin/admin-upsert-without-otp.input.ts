import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUpdateWithoutOtpInput } from './admin-update-without-otp.input';
import { AdminCreateWithoutOtpInput } from './admin-create-without-otp.input';

@InputType()
export class AdminUpsertWithoutOtpInput {

    @Field(() => AdminUpdateWithoutOtpInput, {nullable:false})
    update!: AdminUpdateWithoutOtpInput;

    @Field(() => AdminCreateWithoutOtpInput, {nullable:false})
    create!: AdminCreateWithoutOtpInput;
}
