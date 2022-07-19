import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPurchaseInput } from './user-create-without-purchase.input';
import { UserCreateOrConnectWithoutPurchaseInput } from './user-create-or-connect-without-purchase.input';
import { UserUpsertWithoutPurchaseInput } from './user-upsert-without-purchase.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPurchaseInput } from './user-update-without-purchase.input';

@InputType()
export class UserUpdateOneRequiredWithoutPurchaseNestedInput {

    @Field(() => UserCreateWithoutPurchaseInput, {nullable:true})
    create?: UserCreateWithoutPurchaseInput;

    @Field(() => UserCreateOrConnectWithoutPurchaseInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseInput;

    @Field(() => UserUpsertWithoutPurchaseInput, {nullable:true})
    upsert?: UserUpsertWithoutPurchaseInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPurchaseInput, {nullable:true})
    update?: UserUpdateWithoutPurchaseInput;
}
