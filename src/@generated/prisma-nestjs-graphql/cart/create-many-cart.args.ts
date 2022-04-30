import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CartCreateManyInput } from './cart-create-many.input';

@ArgsType()
export class CreateManyCartArgs {

    @Field(() => [CartCreateManyInput], {nullable:false})
    data!: Array<CartCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
