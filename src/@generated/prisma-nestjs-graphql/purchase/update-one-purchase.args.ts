import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PurchaseUpdateInput } from './purchase-update.input';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';

@ArgsType()
export class UpdateOnePurchaseArgs {

    @Field(() => PurchaseUpdateInput, {nullable:false})
    data!: PurchaseUpdateInput;

    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: PurchaseWhereUniqueInput;
}
