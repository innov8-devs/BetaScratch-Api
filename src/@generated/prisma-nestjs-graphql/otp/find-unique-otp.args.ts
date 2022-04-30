import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpWhereUniqueInput } from './otp-where-unique.input';

@ArgsType()
export class FindUniqueOtpArgs {

    @Field(() => OtpWhereUniqueInput, {nullable:false})
    where!: OtpWhereUniqueInput;
}
