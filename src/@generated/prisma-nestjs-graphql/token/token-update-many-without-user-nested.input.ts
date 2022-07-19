import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateWithoutUserInput } from './token-create-without-user.input';
import { TokenCreateOrConnectWithoutUserInput } from './token-create-or-connect-without-user.input';
import { TokenUpsertWithWhereUniqueWithoutUserInput } from './token-upsert-with-where-unique-without-user.input';
import { TokenCreateManyUserInputEnvelope } from './token-create-many-user-input-envelope.input';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenUpdateWithWhereUniqueWithoutUserInput } from './token-update-with-where-unique-without-user.input';
import { TokenUpdateManyWithWhereWithoutUserInput } from './token-update-many-with-where-without-user.input';
import { TokenScalarWhereInput } from './token-scalar-where.input';

@InputType()
export class TokenUpdateManyWithoutUserNestedInput {

    @Field(() => [TokenCreateWithoutUserInput], {nullable:true})
    create?: Array<TokenCreateWithoutUserInput>;

    @Field(() => [TokenCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<TokenCreateOrConnectWithoutUserInput>;

    @Field(() => [TokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<TokenUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => TokenCreateManyUserInputEnvelope, {nullable:true})
    createMany?: TokenCreateManyUserInputEnvelope;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    set?: Array<TokenWhereUniqueInput>;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    disconnect?: Array<TokenWhereUniqueInput>;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    delete?: Array<TokenWhereUniqueInput>;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    connect?: Array<TokenWhereUniqueInput>;

    @Field(() => [TokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<TokenUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [TokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<TokenUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    deleteMany?: Array<TokenScalarWhereInput>;
}
