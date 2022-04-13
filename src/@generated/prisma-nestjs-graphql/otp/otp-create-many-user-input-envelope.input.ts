import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpCreateManyUserInput } from './otp-create-many-user.input';

@InputType()
export class OtpCreateManyUserInputEnvelope {

    @Field(() => [OtpCreateManyUserInput], {nullable:false})
    data!: Array<OtpCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
