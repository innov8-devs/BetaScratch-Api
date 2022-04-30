import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartCreateWithoutUserInput } from './cart-create-without-user.input';
import { CartCreateOrConnectWithoutUserInput } from './cart-create-or-connect-without-user.input';
import { CartCreateManyUserInputEnvelope } from './cart-create-many-user-input-envelope.input';
import { CartWhereUniqueInput } from './cart-where-unique.input';

@InputType()
export class CartUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [CartCreateWithoutUserInput], {nullable:true})
    create?: Array<CartCreateWithoutUserInput>;

    @Field(() => [CartCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<CartCreateOrConnectWithoutUserInput>;

    @Field(() => CartCreateManyUserInputEnvelope, {nullable:true})
    createMany?: CartCreateManyUserInputEnvelope;

    @Field(() => [CartWhereUniqueInput], {nullable:true})
    connect?: Array<CartWhereUniqueInput>;
}
