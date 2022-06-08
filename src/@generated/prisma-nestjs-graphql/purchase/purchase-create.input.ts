import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CartCreateNestedManyWithoutPurchaseInput } from '../cart/cart-create-nested-many-without-purchase.input';
import { UserCreateNestedOneWithoutPurchaseInput } from '../user/user-create-nested-one-without-purchase.input';

@InputType()
export class PurchaseCreateInput {

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:false})
    reference!: string;

    @Field(() => CartCreateNestedManyWithoutPurchaseInput, {nullable:true})
    cards?: CartCreateNestedManyWithoutPurchaseInput;

    @Field(() => UserCreateNestedOneWithoutPurchaseInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPurchaseInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
