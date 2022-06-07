import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { CartUpdateWithoutPurchaseInput } from './cart-update-without-purchase.input';

@InputType()
export class CartUpdateWithWhereUniqueWithoutPurchaseInput {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    where!: CartWhereUniqueInput;

    @Field(() => CartUpdateWithoutPurchaseInput, {nullable:false})
    data!: CartUpdateWithoutPurchaseInput;
}
