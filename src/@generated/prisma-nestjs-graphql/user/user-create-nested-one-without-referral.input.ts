import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReferralInput } from './user-create-without-referral.input';
import { UserCreateOrConnectWithoutReferralInput } from './user-create-or-connect-without-referral.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReferralInput {

    @Field(() => UserCreateWithoutReferralInput, {nullable:true})
    create?: UserCreateWithoutReferralInput;

    @Field(() => UserCreateOrConnectWithoutReferralInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutReferralInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
