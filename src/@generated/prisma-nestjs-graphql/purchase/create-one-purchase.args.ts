import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PurchaseCreateInput } from './purchase-create.input';

@ArgsType()
export class CreateOnePurchaseArgs {

    @Field(() => PurchaseCreateInput, {nullable:false})
    data!: PurchaseCreateInput;
}
