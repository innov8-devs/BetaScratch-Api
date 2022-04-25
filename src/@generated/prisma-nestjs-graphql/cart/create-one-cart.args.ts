import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartCreateInput } from './cart-create.input';

@ArgsType()
export class CreateOneCartArgs {

    @Field(() => CartCreateInput, {nullable:false})
    data!: CartCreateInput;
}
