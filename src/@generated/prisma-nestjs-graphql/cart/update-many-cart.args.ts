import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartUpdateManyMutationInput } from './cart-update-many-mutation.input';
import { CartWhereInput } from './cart-where.input';

@ArgsType()
export class UpdateManyCartArgs {

    @Field(() => CartUpdateManyMutationInput, {nullable:false})
    data!: CartUpdateManyMutationInput;

    @Field(() => CartWhereInput, {nullable:true})
    where?: CartWhereInput;
}
