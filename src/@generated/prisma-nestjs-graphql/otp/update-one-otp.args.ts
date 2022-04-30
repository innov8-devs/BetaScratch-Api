import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpUpdateInput } from './otp-update.input';
import { OtpWhereUniqueInput } from './otp-where-unique.input';

@ArgsType()
export class UpdateOneOtpArgs {

    @Field(() => OtpUpdateInput, {nullable:false})
    data!: OtpUpdateInput;

    @Field(() => OtpWhereUniqueInput, {nullable:false})
    where!: OtpWhereUniqueInput;
}
