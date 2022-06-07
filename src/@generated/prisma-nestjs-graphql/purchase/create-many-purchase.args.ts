import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PurchaseCreateManyInput } from './purchase-create-many.input';

@ArgsType()
export class CreateManyPurchaseArgs {

    @Field(() => [PurchaseCreateManyInput], {nullable:false})
    data!: Array<PurchaseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
