import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPurchasesInput } from './user-update-without-purchases.input';
import { UserCreateWithoutPurchasesInput } from './user-create-without-purchases.input';

@InputType()
export class UserUpsertWithoutPurchasesInput {

    @Field(() => UserUpdateWithoutPurchasesInput, {nullable:false})
    update!: UserUpdateWithoutPurchasesInput;

    @Field(() => UserCreateWithoutPurchasesInput, {nullable:false})
    create!: UserCreateWithoutPurchasesInput;
}
