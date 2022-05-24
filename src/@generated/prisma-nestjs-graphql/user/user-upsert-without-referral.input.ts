import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReferralInput } from './user-update-without-referral.input';
import { UserCreateWithoutReferralInput } from './user-create-without-referral.input';

@InputType()
export class UserUpsertWithoutReferralInput {

    @Field(() => UserUpdateWithoutReferralInput, {nullable:false})
    update!: UserUpdateWithoutReferralInput;

    @Field(() => UserCreateWithoutReferralInput, {nullable:false})
    create!: UserCreateWithoutReferralInput;
}
