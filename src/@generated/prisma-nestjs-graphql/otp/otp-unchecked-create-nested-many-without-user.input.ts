import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpCreateWithoutUserInput } from './otp-create-without-user.input';
import { OtpCreateOrConnectWithoutUserInput } from './otp-create-or-connect-without-user.input';
import { OtpCreateManyUserInputEnvelope } from './otp-create-many-user-input-envelope.input';
import { OtpWhereUniqueInput } from './otp-where-unique.input';

@InputType()
export class OtpUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [OtpCreateWithoutUserInput], {nullable:true})
    create?: Array<OtpCreateWithoutUserInput>;

    @Field(() => [OtpCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<OtpCreateOrConnectWithoutUserInput>;

    @Field(() => OtpCreateManyUserInputEnvelope, {nullable:true})
    createMany?: OtpCreateManyUserInputEnvelope;

    @Field(() => [OtpWhereUniqueInput], {nullable:true})
    connect?: Array<OtpWhereUniqueInput>;
}
