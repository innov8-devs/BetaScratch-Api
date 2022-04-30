import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpUpdateManyMutationInput } from './otp-update-many-mutation.input';
import { OtpWhereInput } from './otp-where.input';

@ArgsType()
export class UpdateManyOtpArgs {

    @Field(() => OtpUpdateManyMutationInput, {nullable:false})
    data!: OtpUpdateManyMutationInput;

    @Field(() => OtpWhereInput, {nullable:true})
    where?: OtpWhereInput;
}
