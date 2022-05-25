import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutReferralsInput } from './user-update-without-referrals.input';
import { UserCreateWithoutReferralsInput } from './user-create-without-referrals.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutReferralsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutReferralsInput, {nullable:false})
    update!: UserUpdateWithoutReferralsInput;

    @Field(() => UserCreateWithoutReferralsInput, {nullable:false})
    create!: UserCreateWithoutReferralsInput;
}
