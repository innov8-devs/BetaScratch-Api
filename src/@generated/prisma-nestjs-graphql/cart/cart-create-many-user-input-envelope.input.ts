import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartCreateManyUserInput } from './cart-create-many-user.input';

@InputType()
export class CartCreateManyUserInputEnvelope {

    @Field(() => [CartCreateManyUserInput], {nullable:false})
    data!: Array<CartCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
