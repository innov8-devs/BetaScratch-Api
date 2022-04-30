import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpWhereInput } from './otp-where.input';
import { OtpOrderByWithRelationInput } from './otp-order-by-with-relation.input';
import { OtpWhereUniqueInput } from './otp-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OtpScalarFieldEnum } from './otp-scalar-field.enum';

@ArgsType()
export class FindManyOtpArgs {

    @Field(() => OtpWhereInput, {nullable:true})
    where?: OtpWhereInput;

    @Field(() => [OtpOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OtpOrderByWithRelationInput>;

    @Field(() => OtpWhereUniqueInput, {nullable:true})
    cursor?: OtpWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OtpScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OtpScalarFieldEnum>;
}
