import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpWhereUniqueInput } from './otp-where-unique.input';
import { OtpUpdateWithoutAdminInput } from './otp-update-without-admin.input';

@InputType()
export class OtpUpdateWithWhereUniqueWithoutAdminInput {

    @Field(() => OtpWhereUniqueInput, {nullable:false})
    where!: OtpWhereUniqueInput;

    @Field(() => OtpUpdateWithoutAdminInput, {nullable:false})
    data!: OtpUpdateWithoutAdminInput;
}
