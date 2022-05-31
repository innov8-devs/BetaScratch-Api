import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpScalarWhereInput } from './otp-scalar-where.input';
import { OtpUpdateManyMutationInput } from './otp-update-many-mutation.input';

@InputType()
export class OtpUpdateManyWithWhereWithoutAdminInput {

    @Field(() => OtpScalarWhereInput, {nullable:false})
    where!: OtpScalarWhereInput;

    @Field(() => OtpUpdateManyMutationInput, {nullable:false})
    data!: OtpUpdateManyMutationInput;
}
