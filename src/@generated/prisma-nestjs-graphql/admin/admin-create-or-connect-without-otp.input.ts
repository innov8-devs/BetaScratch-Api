import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminCreateWithoutOtpInput } from './admin-create-without-otp.input';

@InputType()
export class AdminCreateOrConnectWithoutOtpInput {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    where!: AdminWhereUniqueInput;

    @Field(() => AdminCreateWithoutOtpInput, {nullable:false})
    create!: AdminCreateWithoutOtpInput;
}
