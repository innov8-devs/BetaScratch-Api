import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartWhereUniqueInput } from './cart-where-unique.input';

@ArgsType()
export class DeleteOneCartArgs {

    @Field(() => CartWhereUniqueInput, {nullable:false})
    where!: CartWhereUniqueInput;
}
