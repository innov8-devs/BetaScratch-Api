import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReferralsInput } from './user-create-without-referrals.input';
import { UserCreateOrConnectWithoutReferralsInput } from './user-create-or-connect-without-referrals.input';
import { UserCreateManyReferralsInputEnvelope } from './user-create-many-referrals-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutReferralsInput {

    @Field(() => [UserCreateWithoutReferralsInput], {nullable:true})
    create?: Array<UserCreateWithoutReferralsInput>;

    @Field(() => [UserCreateOrConnectWithoutReferralsInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutReferralsInput>;

    @Field(() => UserCreateManyReferralsInputEnvelope, {nullable:true})
    createMany?: UserCreateManyReferralsInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}
