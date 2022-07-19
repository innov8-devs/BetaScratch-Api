import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpCreateWithoutAdminInput } from './otp-create-without-admin.input';
import { OtpCreateOrConnectWithoutAdminInput } from './otp-create-or-connect-without-admin.input';
import { OtpUpsertWithWhereUniqueWithoutAdminInput } from './otp-upsert-with-where-unique-without-admin.input';
import { OtpCreateManyAdminInputEnvelope } from './otp-create-many-admin-input-envelope.input';
import { OtpWhereUniqueInput } from './otp-where-unique.input';
import { OtpUpdateWithWhereUniqueWithoutAdminInput } from './otp-update-with-where-unique-without-admin.input';
import { OtpUpdateManyWithWhereWithoutAdminInput } from './otp-update-many-with-where-without-admin.input';
import { OtpScalarWhereInput } from './otp-scalar-where.input';

@InputType()
export class OtpUncheckedUpdateManyWithoutAdminNestedInput {

    @Field(() => [OtpCreateWithoutAdminInput], {nullable:true})
    create?: Array<OtpCreateWithoutAdminInput>;

    @Field(() => [OtpCreateOrConnectWithoutAdminInput], {nullable:true})
    connectOrCreate?: Array<OtpCreateOrConnectWithoutAdminInput>;

    @Field(() => [OtpUpsertWithWhereUniqueWithoutAdminInput], {nullable:true})
    upsert?: Array<OtpUpsertWithWhereUniqueWithoutAdminInput>;

    @Field(() => OtpCreateManyAdminInputEnvelope, {nullable:true})
    createMany?: OtpCreateManyAdminInputEnvelope;

    @Field(() => [OtpWhereUniqueInput], {nullable:true})
    set?: Array<OtpWhereUniqueInput>;

    @Field(() => [OtpWhereUniqueInput], {nullable:true})
    disconnect?: Array<OtpWhereUniqueInput>;

    @Field(() => [OtpWhereUniqueInput], {nullable:true})
    delete?: Array<OtpWhereUniqueInput>;

    @Field(() => [OtpWhereUniqueInput], {nullable:true})
    connect?: Array<OtpWhereUniqueInput>;

    @Field(() => [OtpUpdateWithWhereUniqueWithoutAdminInput], {nullable:true})
    update?: Array<OtpUpdateWithWhereUniqueWithoutAdminInput>;

    @Field(() => [OtpUpdateManyWithWhereWithoutAdminInput], {nullable:true})
    updateMany?: Array<OtpUpdateManyWithWhereWithoutAdminInput>;

    @Field(() => [OtpScalarWhereInput], {nullable:true})
    deleteMany?: Array<OtpScalarWhereInput>;
}
