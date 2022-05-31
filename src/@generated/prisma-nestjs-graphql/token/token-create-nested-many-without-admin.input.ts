import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateWithoutAdminInput } from './token-create-without-admin.input';
import { TokenCreateOrConnectWithoutAdminInput } from './token-create-or-connect-without-admin.input';
import { TokenCreateManyAdminInputEnvelope } from './token-create-many-admin-input-envelope.input';
import { TokenWhereUniqueInput } from './token-where-unique.input';

@InputType()
export class TokenCreateNestedManyWithoutAdminInput {

    @Field(() => [TokenCreateWithoutAdminInput], {nullable:true})
    create?: Array<TokenCreateWithoutAdminInput>;

    @Field(() => [TokenCreateOrConnectWithoutAdminInput], {nullable:true})
    connectOrCreate?: Array<TokenCreateOrConnectWithoutAdminInput>;

    @Field(() => TokenCreateManyAdminInputEnvelope, {nullable:true})
    createMany?: TokenCreateManyAdminInputEnvelope;

    @Field(() => [TokenWhereUniqueInput], {nullable:true})
    connect?: Array<TokenWhereUniqueInput>;
}
