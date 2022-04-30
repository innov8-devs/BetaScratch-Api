import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpWhereUniqueInput } from './otp-where-unique.input';
import { OtpCreateWithoutUserInput } from './otp-create-without-user.input';

@InputType()
export class OtpCreateOrConnectWithoutUserInput {

    @Field(() => OtpWhereUniqueInput, {nullable:false})
    where!: OtpWhereUniqueInput;

    @Field(() => OtpCreateWithoutUserInput, {nullable:false})
    create!: OtpCreateWithoutUserInput;
}
