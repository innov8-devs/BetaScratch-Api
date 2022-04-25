import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCartInput } from './user-create-without-cart.input';
import { UserCreateOrConnectWithoutCartInput } from './user-create-or-connect-without-cart.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCartInput {

    @Field(() => UserCreateWithoutCartInput, {nullable:true})
    create?: UserCreateWithoutCartInput;

    @Field(() => UserCreateOrConnectWithoutCartInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCartInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
