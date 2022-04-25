import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartUpdateInput } from './cart-update.input';
import { CartWhereUniqueInput } from './cart-where-unique.input';

@ArgsType()
export class UpdateOneCartArgs {

    @Field(() => CartUpdateInput, {nullable:false})
    data!: CartUpdateInput;

    @Field(() => CartWhereUniqueInput, {nullable:false})
    where!: CartWhereUniqueInput;
}
