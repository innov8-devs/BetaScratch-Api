import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutReferralInput } from '../user/user-create-nested-one-without-referral.input';

@InputType()
export class ReferralCreateWithoutReferralsInput {

    @Field(() => UserCreateNestedOneWithoutReferralInput, {nullable:false})
    user!: UserCreateNestedOneWithoutReferralInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
