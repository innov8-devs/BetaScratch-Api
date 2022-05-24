import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferralCreateManyInput } from './referral-create-many.input';

@ArgsType()
export class CreateManyReferralArgs {

    @Field(() => [ReferralCreateManyInput], {nullable:false})
    data!: Array<ReferralCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
