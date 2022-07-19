import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPurchasesInput } from './user-create-without-purchases.input';
import { UserCreateOrConnectWithoutPurchasesInput } from './user-create-or-connect-without-purchases.input';
import { UserUpsertWithoutPurchasesInput } from './user-upsert-without-purchases.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPurchasesInput } from './user-update-without-purchases.input';

@InputType()
export class UserUpdateOneRequiredWithoutPurchasesNestedInput {

    @Field(() => UserCreateWithoutPurchasesInput, {nullable:true})
    create?: UserCreateWithoutPurchasesInput;

    @Field(() => UserCreateOrConnectWithoutPurchasesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput;

    @Field(() => UserUpsertWithoutPurchasesInput, {nullable:true})
    upsert?: UserUpsertWithoutPurchasesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPurchasesInput, {nullable:true})
    update?: UserUpdateWithoutPurchasesInput;
}
