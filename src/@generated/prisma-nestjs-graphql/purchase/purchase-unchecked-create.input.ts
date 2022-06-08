import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CartUncheckedCreateNestedManyWithoutPurchaseInput } from '../cart/cart-unchecked-create-nested-many-without-purchase.input';

@InputType()
export class PurchaseUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => CartUncheckedCreateNestedManyWithoutPurchaseInput, {nullable:true})
    cards?: CartUncheckedCreateNestedManyWithoutPurchaseInput;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
