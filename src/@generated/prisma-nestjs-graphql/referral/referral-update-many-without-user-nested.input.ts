import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralCreateWithoutUserInput } from './referral-create-without-user.input';
import { ReferralCreateOrConnectWithoutUserInput } from './referral-create-or-connect-without-user.input';
import { ReferralUpsertWithWhereUniqueWithoutUserInput } from './referral-upsert-with-where-unique-without-user.input';
import { ReferralCreateManyUserInputEnvelope } from './referral-create-many-user-input-envelope.input';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';
import { ReferralUpdateWithWhereUniqueWithoutUserInput } from './referral-update-with-where-unique-without-user.input';
import { ReferralUpdateManyWithWhereWithoutUserInput } from './referral-update-many-with-where-without-user.input';
import { ReferralScalarWhereInput } from './referral-scalar-where.input';

@InputType()
export class ReferralUpdateManyWithoutUserNestedInput {

    @Field(() => [ReferralCreateWithoutUserInput], {nullable:true})
    create?: Array<ReferralCreateWithoutUserInput>;

    @Field(() => [ReferralCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReferralCreateOrConnectWithoutUserInput>;

    @Field(() => [ReferralUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ReferralUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReferralCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ReferralCreateManyUserInputEnvelope;

    @Field(() => [ReferralWhereUniqueInput], {nullable:true})
    set?: Array<ReferralWhereUniqueInput>;

    @Field(() => [ReferralWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReferralWhereUniqueInput>;

    @Field(() => [ReferralWhereUniqueInput], {nullable:true})
    delete?: Array<ReferralWhereUniqueInput>;

    @Field(() => [ReferralWhereUniqueInput], {nullable:true})
    connect?: Array<ReferralWhereUniqueInput>;

    @Field(() => [ReferralUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ReferralUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReferralUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ReferralUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReferralScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReferralScalarWhereInput>;
}
