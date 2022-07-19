import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReferralInput } from './user-create-without-referral.input';
import { UserCreateOrConnectWithoutReferralInput } from './user-create-or-connect-without-referral.input';
import { UserUpsertWithoutReferralInput } from './user-upsert-without-referral.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutReferralInput } from './user-update-without-referral.input';

@InputType()
export class UserUpdateOneRequiredWithoutReferralNestedInput {

    @Field(() => UserCreateWithoutReferralInput, {nullable:true})
    create?: UserCreateWithoutReferralInput;

    @Field(() => UserCreateOrConnectWithoutReferralInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutReferralInput;

    @Field(() => UserUpsertWithoutReferralInput, {nullable:true})
    upsert?: UserUpsertWithoutReferralInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutReferralInput, {nullable:true})
    update?: UserUpdateWithoutReferralInput;
}
