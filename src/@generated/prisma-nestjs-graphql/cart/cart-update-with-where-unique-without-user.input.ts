import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { CartUpdateWithoutUserInput } from './cart-update-without-user.input';

@InputType()
export class CartUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    where!: CartWhereUniqueInput;

    @Field(() => CartUpdateWithoutUserInput, {nullable:false})
    data!: CartUpdateWithoutUserInput;
}
