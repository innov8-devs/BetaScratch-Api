import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';
import { ReferralCreateInput } from './referral-create.input';
import { ReferralUpdateInput } from './referral-update.input';

@ArgsType()
export class UpsertOneReferralArgs {

    @Field(() => ReferralWhereUniqueInput, {nullable:false})
    where!: ReferralWhereUniqueInput;

    @Field(() => ReferralCreateInput, {nullable:false})
    create!: ReferralCreateInput;

    @Field(() => ReferralUpdateInput, {nullable:false})
    update!: ReferralUpdateInput;
}
