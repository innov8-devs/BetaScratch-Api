import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPurchaseInput } from './user-update-without-purchase.input';
import { UserCreateWithoutPurchaseInput } from './user-create-without-purchase.input';

@InputType()
export class UserUpsertWithoutPurchaseInput {

    @Field(() => UserUpdateWithoutPurchaseInput, {nullable:false})
    update!: UserUpdateWithoutPurchaseInput;

    @Field(() => UserCreateWithoutPurchaseInput, {nullable:false})
    create!: UserCreateWithoutPurchaseInput;
}
