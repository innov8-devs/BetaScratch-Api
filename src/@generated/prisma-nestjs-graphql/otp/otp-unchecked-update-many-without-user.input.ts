import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpCreateWithoutUserInput } from './otp-create-without-user.input';
import { OtpCreateOrConnectWithoutUserInput } from './otp-create-or-connect-without-user.input';
import { OtpUpsertWithWhereUniqueWithoutUserInput } from './otp-upsert-with-where-unique-without-user.input';
import { OtpCreateManyUserInputEnvelope } from './otp-create-many-user-input-envelope.input';
import { OtpWhereUniqueInput } from './otp-where-unique.input';
import { OtpUpdateWithWhereUniqueWithoutUserInput } from './otp-update-with-where-unique-without-user.input';
import { OtpUpdateManyWithWhereWithoutUserInput } from './otp-update-many-with-where-without-user.input';
import { OtpScalarWhereInput } from './otp-scalar-where.input';

@InputType()
export class OtpUncheckedUpdateManyWithoutUserInput {

    @Field(() => [OtpCreateWithoutUserInput], {nullable:true})
    create?: Array<OtpCreateWithoutUserInput>;

    @Field(() => [OtpCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<OtpCreateOrConnectWithoutUserInput>;

    @Field(() => [OtpUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<OtpUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => OtpCreateManyUserInputEnvelope, {nullable:true})
    createMany?: OtpCreateManyUserInputEnvelope;

    @Field(() => [OtpWhereUniqueInput], {nullable:true})
    set?: Array<OtpWhereUniqueInput>;

    @Field(() => [OtpWhereUniqueInput], {nullable:true})
    disconnect?: Array<OtpWhereUniqueInput>;

    @Field(() => [OtpWhereUniqueInput], {nullable:true})
    delete?: Array<OtpWhereUniqueInput>;

    @Field(() => [OtpWhereUniqueInput], {nullable:true})
    connect?: Array<OtpWhereUniqueInput>;

    @Field(() => [OtpUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<OtpUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [OtpUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<OtpUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [OtpScalarWhereInput], {nullable:true})
    deleteMany?: Array<OtpScalarWhereInput>;
}
