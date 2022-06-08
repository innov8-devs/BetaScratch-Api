import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';
import { PurchaseUpdateWithoutUserInput } from './purchase-update-without-user.input';

@InputType()
export class PurchaseUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: PurchaseWhereUniqueInput;

    @Field(() => PurchaseUpdateWithoutUserInput, {nullable:false})
    data!: PurchaseUpdateWithoutUserInput;
}
