import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { CartCreateWithoutPurchaseInput } from './cart-create-without-purchase.input';

@InputType()
export class CartCreateOrConnectWithoutPurchaseInput {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    where!: CartWhereUniqueInput;

    @Field(() => CartCreateWithoutPurchaseInput, {nullable:false})
    create!: CartCreateWithoutPurchaseInput;
}
