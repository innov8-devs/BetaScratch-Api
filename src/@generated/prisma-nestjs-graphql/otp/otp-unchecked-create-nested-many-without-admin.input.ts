import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpCreateWithoutAdminInput } from './otp-create-without-admin.input';
import { OtpCreateOrConnectWithoutAdminInput } from './otp-create-or-connect-without-admin.input';
import { OtpCreateManyAdminInputEnvelope } from './otp-create-many-admin-input-envelope.input';
import { OtpWhereUniqueInput } from './otp-where-unique.input';

@InputType()
export class OtpUncheckedCreateNestedManyWithoutAdminInput {

    @Field(() => [OtpCreateWithoutAdminInput], {nullable:true})
    create?: Array<OtpCreateWithoutAdminInput>;

    @Field(() => [OtpCreateOrConnectWithoutAdminInput], {nullable:true})
    connectOrCreate?: Array<OtpCreateOrConnectWithoutAdminInput>;

    @Field(() => OtpCreateManyAdminInputEnvelope, {nullable:true})
    createMany?: OtpCreateManyAdminInputEnvelope;

    @Field(() => [OtpWhereUniqueInput], {nullable:true})
    connect?: Array<OtpWhereUniqueInput>;
}
