import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';
import { PurchaseCreateWithoutCardsInput } from './purchase-create-without-cards.input';

@InputType()
export class PurchaseCreateOrConnectWithoutCardsInput {

    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: PurchaseWhereUniqueInput;

    @Field(() => PurchaseCreateWithoutCardsInput, {nullable:false})
    create!: PurchaseCreateWithoutCardsInput;
}
