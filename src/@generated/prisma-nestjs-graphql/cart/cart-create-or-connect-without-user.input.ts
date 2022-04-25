import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { CartCreateWithoutUserInput } from './cart-create-without-user.input';

@InputType()
export class CartCreateOrConnectWithoutUserInput {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    where!: CartWhereUniqueInput;

    @Field(() => CartCreateWithoutUserInput, {nullable:false})
    create!: CartCreateWithoutUserInput;
}
