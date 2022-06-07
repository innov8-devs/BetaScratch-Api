import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseUpdateWithoutCardsInput } from './purchase-update-without-cards.input';
import { PurchaseCreateWithoutCardsInput } from './purchase-create-without-cards.input';

@InputType()
export class PurchaseUpsertWithoutCardsInput {

    @Field(() => PurchaseUpdateWithoutCardsInput, {nullable:false})
    update!: PurchaseUpdateWithoutCardsInput;

    @Field(() => PurchaseCreateWithoutCardsInput, {nullable:false})
    create!: PurchaseCreateWithoutCardsInput;
}
