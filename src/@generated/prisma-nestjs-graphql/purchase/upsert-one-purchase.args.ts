import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';
import { PurchaseCreateInput } from './purchase-create.input';
import { PurchaseUpdateInput } from './purchase-update.input';

@ArgsType()
export class UpsertOnePurchaseArgs {

    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: PurchaseWhereUniqueInput;

    @Field(() => PurchaseCreateInput, {nullable:false})
    create!: PurchaseCreateInput;

    @Field(() => PurchaseUpdateInput, {nullable:false})
    update!: PurchaseUpdateInput;
}
