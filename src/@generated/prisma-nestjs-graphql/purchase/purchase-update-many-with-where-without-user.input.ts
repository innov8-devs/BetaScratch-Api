import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseScalarWhereInput } from './purchase-scalar-where.input';
import { PurchaseUpdateManyMutationInput } from './purchase-update-many-mutation.input';

@InputType()
export class PurchaseUpdateManyWithWhereWithoutUserInput {

    @Field(() => PurchaseScalarWhereInput, {nullable:false})
    where!: PurchaseScalarWhereInput;

    @Field(() => PurchaseUpdateManyMutationInput, {nullable:false})
    data!: PurchaseUpdateManyMutationInput;
}
