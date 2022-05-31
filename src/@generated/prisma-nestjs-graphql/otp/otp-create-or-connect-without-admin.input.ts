import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpWhereUniqueInput } from './otp-where-unique.input';
import { OtpCreateWithoutAdminInput } from './otp-create-without-admin.input';

@InputType()
export class OtpCreateOrConnectWithoutAdminInput {

    @Field(() => OtpWhereUniqueInput, {nullable:false})
    where!: OtpWhereUniqueInput;

    @Field(() => OtpCreateWithoutAdminInput, {nullable:false})
    create!: OtpCreateWithoutAdminInput;
}
