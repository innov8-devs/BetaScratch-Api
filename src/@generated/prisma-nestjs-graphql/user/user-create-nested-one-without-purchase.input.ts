import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPurchaseInput } from './user-create-without-purchase.input';
import { UserCreateOrConnectWithoutPurchaseInput } from './user-create-or-connect-without-purchase.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPurchaseInput {

    @Field(() => UserCreateWithoutPurchaseInput, {nullable:true})
    create?: UserCreateWithoutPurchaseInput;

    @Field(() => UserCreateOrConnectWithoutPurchaseInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
