import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartWhereUniqueInput } from './cart-where-unique.input';
import { CartCreateInput } from './cart-create.input';
import { CartUpdateInput } from './cart-update.input';

@ArgsType()
export class UpsertOneCartArgs {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    where!: CartWhereUniqueInput;

    @Field(() => CartCreateInput, {nullable:false})
    create!: CartCreateInput;

    @Field(() => CartUpdateInput, {nullable:false})
    update!: CartUpdateInput;
}
