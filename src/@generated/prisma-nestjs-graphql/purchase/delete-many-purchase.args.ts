import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PurchaseWhereInput } from './purchase-where.input';

@ArgsType()
export class DeleteManyPurchaseArgs {

    @Field(() => PurchaseWhereInput, {nullable:true})
    where?: PurchaseWhereInput;
}
