import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpCreateManyInput } from './otp-create-many.input';

@ArgsType()
export class CreateManyOtpArgs {

    @Field(() => [OtpCreateManyInput], {nullable:false})
    data!: Array<OtpCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
