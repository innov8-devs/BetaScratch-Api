import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateWithoutAdminInput } from './token-create-without-admin.input';
import { TokenCreateOrConnectWithoutAdminInput } from './token-create-or-connect-without-admin.input';
import { TokenUpsertWithWhereUniqueWithoutAdminInput } from './token-upsert-with-where-unique-without-admin.input';
import { TokenCreateManyAdminInputEnvelope } from './token-create-many-admin-input-envelope.input';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenUpdateWithWhereUniqueWithoutAdminInput } from './token-update-with-where-unique-without-admin.input';
import { TokenUpdateManyWithWhereWithoutAdminInput } from './token-update-many-with-where-without-admin.input';
import { TokenScalarWhereInput } from './token-scalar-where.input';

@InputType()
export class TokenUncheckedUpdateManyWithoutAdminNestedInput {

    @Field(() => [TokenCreateWithoutAdminInput], {nullable:true})
    create?: Array<TokenCreateWithoutAdminInput>;

    @Field(() => [TokenCreateOrConnectWithoutAdminInput], {nullable:true})
    connectOrCreate?: Array<TokenCreateOrConnectWithoutAdminInput>;

    @Field(() => [TokenUpsertWithWhereUniqueWithoutAdminInput], {nullable:true})
    upsert?: Array<TokenUpsertWithWhereUniqueWithoutAdminInput>;

    @Field(() => TokenCreateManyAdminInputEnvelope, {nullable:true})
    createMany?: TokenCreateManyAdminInputEnvelope;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    set?: Array<TokenWhereUniqueInput>;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    disconnect?: Array<TokenWhereUniqueInput>;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    delete?: Array<TokenWhereUniqueInput>;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    connect?: Array<TokenWhereUniqueInput>;

    @Field(() => [TokenUpdateWithWhereUniqueWithoutAdminInput], {nullable:true})
    update?: Array<TokenUpdateWithWhereUniqueWithoutAdminInput>;

    @Field(() => [TokenUpdateManyWithWhereWithoutAdminInput], {nullable:true})
    updateMany?: Array<TokenUpdateManyWithWhereWithoutAdminInput>;

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    deleteMany?: Array<TokenScalarWhereInput>;
}
