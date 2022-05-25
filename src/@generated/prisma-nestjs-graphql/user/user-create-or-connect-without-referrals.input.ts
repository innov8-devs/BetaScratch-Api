import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutReferralsInput } from './user-create-without-referrals.input';

@InputType()
export class UserCreateOrConnectWithoutReferralsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutReferralsInput, {nullable:false})
    create!: UserCreateWithoutReferralsInput;
}
