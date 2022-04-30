import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtpWhereInput } from './otp-where.input';

@InputType()
export class OtpListRelationFilter {

    @Field(() => OtpWhereInput, {nullable:true})
    every?: OtpWhereInput;

    @Field(() => OtpWhereInput, {nullable:true})
    some?: OtpWhereInput;

    @Field(() => OtpWhereInput, {nullable:true})
    none?: OtpWhereInput;
}
