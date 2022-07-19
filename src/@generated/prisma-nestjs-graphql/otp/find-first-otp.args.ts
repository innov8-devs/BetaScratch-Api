import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpWhereInput } from './otp-where.input';
import { OtpOrderByWithRelationAndSearchRelevanceInput } from './otp-order-by-with-relation-and-search-relevance.input';
import { OtpWhereUniqueInput } from './otp-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OtpScalarFieldEnum } from './otp-scalar-field.enum';

@ArgsType()
export class FindFirstOtpArgs {

    @Field(() => OtpWhereInput, {nullable:true})
    where?: OtpWhereInput;

    @Field(() => [OtpOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<OtpOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => OtpWhereUniqueInput, {nullable:true})
    cursor?: OtpWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OtpScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OtpScalarFieldEnum>;
}
