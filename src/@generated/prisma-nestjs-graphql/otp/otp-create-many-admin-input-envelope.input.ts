import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpCreateManyAdminInput } from './otp-create-many-admin.input';

@InputType()
export class OtpCreateManyAdminInputEnvelope {

    @Field(() => [OtpCreateManyAdminInput], {nullable:false})
    data!: Array<OtpCreateManyAdminInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
