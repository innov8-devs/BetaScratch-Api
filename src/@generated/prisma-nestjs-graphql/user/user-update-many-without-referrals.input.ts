import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReferralsInput } from './user-create-without-referrals.input';
import { UserCreateOrConnectWithoutReferralsInput } from './user-create-or-connect-without-referrals.input';
import { UserUpsertWithWhereUniqueWithoutReferralsInput } from './user-upsert-with-where-unique-without-referrals.input';
import { UserCreateManyReferralsInputEnvelope } from './user-create-many-referrals-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutReferralsInput } from './user-update-with-where-unique-without-referrals.input';
import { UserUpdateManyWithWhereWithoutReferralsInput } from './user-update-many-with-where-without-referrals.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutReferralsInput {

    @Field(() => [UserCreateWithoutReferralsInput], {nullable:true})
    create?: Array<UserCreateWithoutReferralsInput>;

    @Field(() => [UserCreateOrConnectWithoutReferralsInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutReferralsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutReferralsInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutReferralsInput>;

    @Field(() => UserCreateManyReferralsInputEnvelope, {nullable:true})
    createMany?: UserCreateManyReferralsInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutReferralsInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutReferralsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutReferralsInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutReferralsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
