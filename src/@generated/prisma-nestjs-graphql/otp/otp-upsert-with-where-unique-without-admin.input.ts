import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpWhereUniqueInput } from './otp-where-unique.input';
import { OtpUpdateWithoutAdminInput } from './otp-update-without-admin.input';
import { OtpCreateWithoutAdminInput } from './otp-create-without-admin.input';

@InputType()
export class OtpUpsertWithWhereUniqueWithoutAdminInput {

    @Field(() => OtpWhereUniqueInput, {nullable:false})
    where!: OtpWhereUniqueInput;

    @Field(() => OtpUpdateWithoutAdminInput, {nullable:false})
    update!: OtpUpdateWithoutAdminInput;

    @Field(() => OtpCreateWithoutAdminInput, {nullable:false})
    create!: OtpCreateWithoutAdminInput;
}
