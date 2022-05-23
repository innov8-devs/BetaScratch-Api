import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefferalCreateWithoutUserInput } from './refferal-create-without-user.input';
import { RefferalCreateOrConnectWithoutUserInput } from './refferal-create-or-connect-without-user.input';
import { RefferalCreateManyUserInputEnvelope } from './refferal-create-many-user-input-envelope.input';
import { RefferalWhereUniqueInput } from './refferal-where-unique.input';

@InputType()
export class RefferalUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [RefferalCreateWithoutUserInput], {nullable:true})
    create?: Array<RefferalCreateWithoutUserInput>;

    @Field(() => [RefferalCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<RefferalCreateOrConnectWithoutUserInput>;

    @Field(() => RefferalCreateManyUserInputEnvelope, {nullable:true})
    createMany?: RefferalCreateManyUserInputEnvelope;

    @Field(() => [RefferalWhereUniqueInput], {nullable:true})
    connect?: Array<RefferalWhereUniqueInput>;
}
