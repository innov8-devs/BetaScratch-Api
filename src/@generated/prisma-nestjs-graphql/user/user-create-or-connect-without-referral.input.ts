import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutReferralInput } from './user-create-without-referral.input';

@InputType()
export class UserCreateOrConnectWithoutReferralInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutReferralInput, {nullable:false})
    create!: UserCreateWithoutReferralInput;
}
