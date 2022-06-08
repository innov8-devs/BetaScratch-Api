import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CartCreateNestedManyWithoutPurchaseInput } from '../cart/cart-create-nested-many-without-purchase.input';

@InputType()
export class PurchaseCreateWithoutUserInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
