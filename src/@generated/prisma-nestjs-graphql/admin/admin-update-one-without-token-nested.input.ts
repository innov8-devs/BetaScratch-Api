import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutTokenInput } from './admin-create-without-token.input';
import { AdminCreateOrConnectWithoutTokenInput } from './admin-create-or-connect-without-token.input';
import { AdminUpsertWithoutTokenInput } from './admin-upsert-without-token.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminUpdateWithoutTokenInput } from './admin-update-without-token.input';

@InputType()
export class AdminUpdateOneWithoutTokenNestedInput {

    @Field(() => AdminCreateWithoutTokenInput, {nullable:true})
    create?: AdminCreateWithoutTokenInput;

    @Field(() => AdminCreateOrConnectWithoutTokenInput, {nullable:true})
    connectOrCreate?: AdminCreateOrConnectWithoutTokenInput;

    @Field(() => AdminUpsertWithoutTokenInput, {nullable:true})
    upsert?: AdminUpsertWithoutTokenInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    connect?: AdminWhereUniqueInput;

    @Field(() => AdminUpdateWithoutTokenInput, {nullable:true})
    update?: AdminUpdateWithoutTokenInput;
}
