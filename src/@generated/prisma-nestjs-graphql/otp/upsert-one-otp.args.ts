import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpWhereUniqueInput } from './otp-where-unique.input';
import { OtpCreateInput } from './otp-create.input';
import { OtpUpdateInput } from './otp-update.input';

@ArgsType()
export class UpsertOneOtpArgs {

    @Field(() => OtpWhereUniqueInput, {nullable:false})
    where!: OtpWhereUniqueInput;

    @Field(() => OtpCreateInput, {nullable:false})
    create!: OtpCreateInput;

    @Field(() => OtpUpdateInput, {nullable:false})
    update!: OtpUpdateInput;
}
