import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCartInput } from './user-create-without-cart.input';
import { UserCreateOrConnectWithoutCartInput } from './user-create-or-connect-without-cart.input';
import { UserUpsertWithoutCartInput } from './user-upsert-without-cart.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCartInput } from './user-update-without-cart.input';

@InputType()
export class UserUpdateOneRequiredWithoutCartInput {

    @Field(() => UserCreateWithoutCartInput, {nullable:true})
    create?: UserCreateWithoutCartInput;

    @Field(() => UserCreateOrConnectWithoutCartInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCartInput;

    @Field(() => UserUpsertWithoutCartInput, {nullable:true})
    upsert?: UserUpsertWithoutCartInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCartInput, {nullable:true})
    update?: UserUpdateWithoutCartInput;
}
