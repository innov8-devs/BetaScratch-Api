import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartScalarWhereInput } from './cart-scalar-where.input';
import { CartUpdateManyMutationInput } from './cart-update-many-mutation.input';

@InputType()
export class CartUpdateManyWithWhereWithoutUserInput {

    @Field(() => CartScalarWhereInput, {nullable:false})
    where!: CartScalarWhereInput;

    @Field(() => CartUpdateManyMutationInput, {nullable:false})
    data!: CartUpdateManyMutationInput;
}
