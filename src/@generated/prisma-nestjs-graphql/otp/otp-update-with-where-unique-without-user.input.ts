import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpWhereUniqueInput } from './otp-where-unique.input';
import { OtpUpdateWithoutUserInput } from './otp-update-without-user.input';

@InputType()
export class OtpUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => OtpWhereUniqueInput, {nullable:false})
    where!: OtpWhereUniqueInput;

    @Field(() => OtpUpdateWithoutUserInput, {nullable:false})
    data!: OtpUpdateWithoutUserInput;
}
