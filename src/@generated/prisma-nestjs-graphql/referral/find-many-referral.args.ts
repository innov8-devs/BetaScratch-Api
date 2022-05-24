import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferralWhereInput } from './referral-where.input';
import { ReferralOrderByWithRelationInput } from './referral-order-by-with-relation.input';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReferralScalarFieldEnum } from './referral-scalar-field.enum';

@ArgsType()
export class FindManyReferralArgs {

    @Field(() => ReferralWhereInput, {nullable:true})
    where?: ReferralWhereInput;

    @Field(() => [ReferralOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReferralOrderByWithRelationInput>;

    @Field(() => ReferralWhereUniqueInput, {nullable:true})
    cursor?: ReferralWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReferralScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReferralScalarFieldEnum>;
}
