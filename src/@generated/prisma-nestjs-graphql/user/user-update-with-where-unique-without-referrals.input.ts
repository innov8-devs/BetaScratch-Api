import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutReferralsInput } from './user-update-without-referrals.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutReferralsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutReferralsInput, {nullable:false})
    data!: UserUpdateWithoutReferralsInput;
}
