import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartCreateWithoutUserInput } from './cart-create-without-user.input';
import { CartCreateOrConnectWithoutUserInput } from './cart-create-or-connect-without-user.input';
import { CartUpsertWithWhereUniqueWithoutUserInput } from './cart-upsert-with-where-unique-without-user.input';
import { CartCreateManyUserInputEnvelope } from './cart-create-many-user-input-envelope.input';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { CartUpdateWithWhereUniqueWithoutUserInput } from './cart-update-with-where-unique-without-user.input';
import { CartUpdateManyWithWhereWithoutUserInput } from './cart-update-many-with-where-without-user.input';
import { CartScalarWhereInput } from './cart-scalar-where.input';

@InputType()
export class CartUpdateManyWithoutUserInput {

    @Field(() => [CartCreateWithoutUserInput], {nullable:true})
    create?: Array<CartCreateWithoutUserInput>;

    @Field(() => [CartCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<CartCreateOrConnectWithoutUserInput>;

    @Field(() => [CartUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<CartUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CartCreateManyUserInputEnvelope, {nullable:true})
    createMany?: CartCreateManyUserInputEnvelope;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    set?: Array<CartWhereUniqueInput>;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    disconnect?: Array<CartWhereUniqueInput>;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    delete?: Array<CartWhereUniqueInput>;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    connect?: Array<CartWhereUniqueInput>;

    @Field(() => [CartUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<CartUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CartUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<CartUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CartScalarWhereInput], {nullable:true})
    deleteMany?: Array<CartScalarWhereInput>;
}
