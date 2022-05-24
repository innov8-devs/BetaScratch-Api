import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReferralCreateWithoutUserInput } from './referral-create-without-user.input';
import { ReferralCreateOrConnectWithoutUserInput } from './referral-create-or-connect-without-user.input';
import { ReferralCreateManyUserInputEnvelope } from './referral-create-many-user-input-envelope.input';
import { ReferralWhereUniqueInput } from './referral-where-unique.input';

@InputType()
export class ReferralCreateNestedManyWithoutUserInput {

    @Field(() => [ReferralCreateWithoutUserInput], {nullable:true})
    create?: Array<ReferralCreateWithoutUserInput>;

    @Field(() => [ReferralCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReferralCreateOrConnectWithoutUserInput>;

    @Field(() => ReferralCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ReferralCreateManyUserInputEnvelope;

    @Field(() => [ReferralWhereUniqueInput], {nullable:true})
    connect?: Array<ReferralWhereUniqueInput>;
}
