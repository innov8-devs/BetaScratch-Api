import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PurchaseUpdateManyMutationInput } from './purchase-update-many-mutation.input';
import { PurchaseWhereInput } from './purchase-where.input';

@ArgsType()
export class UpdateManyPurchaseArgs {

    @Field(() => PurchaseUpdateManyMutationInput, {nullable:false})
    data!: PurchaseUpdateManyMutationInput;

    @Field(() => PurchaseWhereInput, {nullable:true})
    where?: PurchaseWhereInput;
}
