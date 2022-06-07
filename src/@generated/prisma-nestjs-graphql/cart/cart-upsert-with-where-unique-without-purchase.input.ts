import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { CartUpdateWithoutPurchaseInput } from './cart-update-without-purchase.input';
import { CartCreateWithoutPurchaseInput } from './cart-create-without-purchase.input';

@InputType()
export class CartUpsertWithWhereUniqueWithoutPurchaseInput {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    where!: CartWhereUniqueInput;

    @Field(() => CartUpdateWithoutPurchaseInput, {nullable:false})
    update!: CartUpdateWithoutPurchaseInput;

    @Field(() => CartCreateWithoutPurchaseInput, {nullable:false})
    create!: CartCreateWithoutPurchaseInput;
}
