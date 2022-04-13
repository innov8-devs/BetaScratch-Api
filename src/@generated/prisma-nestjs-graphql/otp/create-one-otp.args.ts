import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpCreateInput } from './otp-create.input';

@ArgsType()
export class CreateOneOtpArgs {

    @Field(() => OtpCreateInput, {nullable:false})
    data!: OtpCreateInput;
}
