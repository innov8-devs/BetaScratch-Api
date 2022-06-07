import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartCreateWithoutPurchaseInput } from './cart-create-without-purchase.input';
import { CartCreateOrConnectWithoutPurchaseInput } from './cart-create-or-connect-without-purchase.input';
import { CartUpsertWithWhereUniqueWithoutPurchaseInput } from './cart-upsert-with-where-unique-without-purchase.input';
import { CartCreateManyPurchaseInputEnvelope } from './cart-create-many-purchase-input-envelope.input';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { CartUpdateWithWhereUniqueWithoutPurchaseInput } from './cart-update-with-where-unique-without-purchase.input';
import { CartUpdateManyWithWhereWithoutPurchaseInput } from './cart-update-many-with-where-without-purchase.input';
import { CartScalarWhereInput } from './cart-scalar-where.input';

@InputType()
export class CartUpdateManyWithoutPurchaseInput {

    @Field(() => [CartCreateWithoutPurchaseInput], {nullable:true})
    create?: Array<CartCreateWithoutPurchaseInput>;

    @Field(() => [CartCreateOrConnectWithoutPurchaseInput], {nullable:true})
    connectOrCreate?: Array<CartCreateOrConnectWithoutPurchaseInput>;

    @Field(() => [CartUpsertWithWhereUniqueWithoutPurchaseInput], {nullable:true})
    upsert?: Array<CartUpsertWithWhereUniqueWithoutPurchaseInput>;

    @Field(() => CartCreateManyPurchaseInputEnvelope, {nullable:true})
    createMany?: CartCreateManyPurchaseInputEnvelope;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    set?: Array<CartWhereUniqueInput>;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    disconnect?: Array<CartWhereUniqueInput>;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    delete?: Array<CartWhereUniqueInput>;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    connect?: Array<CartWhereUniqueInput>;

    @Field(() => [CartUpdateWithWhereUniqueWithoutPurchaseInput], {nullable:true})
    update?: Array<CartUpdateWithWhereUniqueWithoutPurchaseInput>;

    @Field(() => [CartUpdateManyWithWhereWithoutPurchaseInput], {nullable:true})
    updateMany?: Array<CartUpdateManyWithWhereWithoutPurchaseInput>;

    @Field(() => [CartScalarWhereInput], {nullable:true})
    deleteMany?: Array<CartScalarWhereInput>;
}
