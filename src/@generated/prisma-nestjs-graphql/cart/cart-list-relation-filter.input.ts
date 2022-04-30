import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartWhereInput } from './cart-where.input';

@InputType()
export class CartListRelationFilter {

    @Field(() => CartWhereInput, {nullable:true})
    every?: CartWhereInput;

    @Field(() => CartWhereInput, {nullable:true})
    some?: CartWhereInput;

    @Field(() => CartWhereInput, {nullable:true})
    none?: CartWhereInput;
}
