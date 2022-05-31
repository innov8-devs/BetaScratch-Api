import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutMessageInput } from './admin-create-without-message.input';
import { AdminCreateOrConnectWithoutMessageInput } from './admin-create-or-connect-without-message.input';
import { AdminUpsertWithoutMessageInput } from './admin-upsert-without-message.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminUpdateWithoutMessageInput } from './admin-update-without-message.input';

@InputType()
export class AdminUpdateOneWithoutMessageInput {

    @Field(() => AdminCreateWithoutMessageInput, {nullable:true})
    create?: AdminCreateWithoutMessageInput;

    @Field(() => AdminCreateOrConnectWithoutMessageInput, {nullable:true})
    connectOrCreate?: AdminCreateOrConnectWithoutMessageInput;

    @Field(() => AdminUpsertWithoutMessageInput, {nullable:true})
    upsert?: AdminUpsertWithoutMessageInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    connect?: AdminWhereUniqueInput;

    @Field(() => AdminUpdateWithoutMessageInput, {nullable:true})
    update?: AdminUpdateWithoutMessageInput;
}
