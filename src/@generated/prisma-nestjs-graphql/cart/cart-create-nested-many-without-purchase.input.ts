import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartCreateWithoutPurchaseInput } from './cart-create-without-purchase.input';
import { CartCreateOrConnectWithoutPurchaseInput } from './cart-create-or-connect-without-purchase.input';
import { CartCreateManyPurchaseInputEnvelope } from './cart-create-many-purchase-input-envelope.input';
import { CartWhereUniqueInput } from './cart-where-unique.input';

@InputType()
export class CartCreateNestedManyWithoutPurchaseInput {

    @Field(() => [CartCreateWithoutPurchaseInput], {nullable:true})
    create?: Array<CartCreateWithoutPurchaseInput>;

    @Field(() => [CartCreateOrConnectWithoutPurchaseInput], {nullable:true})
    connectOrCreate?: Array<CartCreateOrConnectWithoutPurchaseInput>;

    @Field(() => CartCreateManyPurchaseInputEnvelope, {nullable:true})
    createMany?: CartCreateManyPurchaseInputEnvelope;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    connect?: Array<CartWhereUniqueInput>;
}
