import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartWhereInput } from './cart-where.input';

@ArgsType()
export class DeleteManyCartArgs {

    @Field(() => CartWhereInput, {nullable:true})
    where?: CartWhereInput;
}
