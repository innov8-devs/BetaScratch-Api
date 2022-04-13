import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpWhereInput } from './otp-where.input';

@ArgsType()
export class DeleteManyOtpArgs {

    @Field(() => OtpWhereInput, {nullable:true})
    where?: OtpWhereInput;
}
