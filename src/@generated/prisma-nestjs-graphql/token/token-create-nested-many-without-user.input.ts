import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateWithoutUserInput } from './token-create-without-user.input';
import { TokenCreateOrConnectWithoutUserInput } from './token-create-or-connect-without-user.input';
import { TokenCreateManyUserInputEnvelope } from './token-create-many-user-input-envelope.input';
import { TokenWhereUniqueInput } from './token-where-unique.input';

@InputType()
export class TokenCreateNestedManyWithoutUserInput {

    @Field(() => [TokenCreateWithoutUserInput], {nullable:true})
    create?: Array<TokenCreateWithoutUserInput>;

    @Field(() => [TokenCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<TokenCreateOrConnectWithoutUserInput>;

    @Field(() => TokenCreateManyUserInputEnvelope, {nullable:true})
    createMany?: TokenCreateManyUserInputEnvelope;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    connect?: Array<TokenWhereUniqueInput>;
}
