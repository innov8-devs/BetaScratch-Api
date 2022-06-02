import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPurchasesInput } from './user-create-without-purchases.input';
import { UserCreateOrConnectWithoutPurchasesInput } from './user-create-or-connect-without-purchases.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPurchasesInput {

    @Field(() => UserCreateWithoutPurchasesInput, {nullable:true})
    create?: UserCreateWithoutPurchasesInput;

    @Field(() => UserCreateOrConnectWithoutPurchasesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
