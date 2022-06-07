import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CartCreateManyPurchaseInput } from './cart-create-many-purchase.input';

@InputType()
export class CartCreateManyPurchaseInputEnvelope {

    @Field(() => [CartCreateManyPurchaseInput], {nullable:false})
    data!: Array<CartCreateManyPurchaseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
