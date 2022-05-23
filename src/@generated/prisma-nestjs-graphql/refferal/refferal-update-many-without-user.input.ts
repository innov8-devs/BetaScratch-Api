import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefferalCreateWithoutUserInput } from './refferal-create-without-user.input';
import { RefferalCreateOrConnectWithoutUserInput } from './refferal-create-or-connect-without-user.input';
import { RefferalUpsertWithWhereUniqueWithoutUserInput } from './refferal-upsert-with-where-unique-without-user.input';
import { RefferalCreateManyUserInputEnvelope } from './refferal-create-many-user-input-envelope.input';
import { RefferalWhereUniqueInput } from './refferal-where-unique.input';
import { RefferalUpdateWithWhereUniqueWithoutUserInput } from './refferal-update-with-where-unique-without-user.input';
import { RefferalUpdateManyWithWhereWithoutUserInput } from './refferal-update-many-with-where-without-user.input';
import { RefferalScalarWhereInput } from './refferal-scalar-where.input';

@InputType()
export class RefferalUpdateManyWithoutUserInput {

    @Field(() => [RefferalCreateWithoutUserInput], {nullable:true})
    create?: Array<RefferalCreateWithoutUserInput>;

    @Field(() => [RefferalCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<RefferalCreateOrConnectWithoutUserInput>;

    @Field(() => [RefferalUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<RefferalUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => RefferalCreateManyUserInputEnvelope, {nullable:true})
    createMany?: RefferalCreateManyUserInputEnvelope;

    @Field(() => [RefferalWhereUniqueInput], {nullable:true})
    set?: Array<RefferalWhereUniqueInput>;

    @Field(() => [RefferalWhereUniqueInput], {nullable:true})
    disconnect?: Array<RefferalWhereUniqueInput>;

    @Field(() => [RefferalWhereUniqueInput], {nullable:true})
    delete?: Array<RefferalWhereUniqueInput>;

    @Field(() => [RefferalWhereUniqueInput], {nullable:true})
    connect?: Array<RefferalWhereUniqueInput>;

    @Field(() => [RefferalUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<RefferalUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [RefferalUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<RefferalUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [RefferalScalarWhereInput], {nullable:true})
    deleteMany?: Array<RefferalScalarWhereInput>;
}
