import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { CartUpdateWithoutUserInput } from './cart-update-without-user.input';
import { CartCreateWithoutUserInput } from './cart-create-without-user.input';

@InputType()
export class CartUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    where!: CartWhereUniqueInput;

    @Field(() => CartUpdateWithoutUserInput, {nullable:false})
    update!: CartUpdateWithoutUserInput;

    @Field(() => CartCreateWithoutUserInput, {nullable:false})
    create!: CartCreateWithoutUserInput;
}
