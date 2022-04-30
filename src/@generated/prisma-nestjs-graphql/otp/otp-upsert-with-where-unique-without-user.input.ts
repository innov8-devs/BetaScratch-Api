import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpWhereUniqueInput } from './otp-where-unique.input';
import { OtpUpdateWithoutUserInput } from './otp-update-without-user.input';
import { OtpCreateWithoutUserInput } from './otp-create-without-user.input';

@InputType()
export class OtpUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => OtpWhereUniqueInput, {nullable:false})
    where!: OtpWhereUniqueInput;

    @Field(() => OtpUpdateWithoutUserInput, {nullable:false})
    update!: OtpUpdateWithoutUserInput;

    @Field(() => OtpCreateWithoutUserInput, {nullable:false})
    create!: OtpCreateWithoutUserInput;
}
