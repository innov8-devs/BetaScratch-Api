import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferralWhereInput } from './referral-where.input';

@ArgsType()
export class DeleteManyReferralArgs {

    @Field(() => ReferralWhereInput, {nullable:true})
    where?: ReferralWhereInput;
}
