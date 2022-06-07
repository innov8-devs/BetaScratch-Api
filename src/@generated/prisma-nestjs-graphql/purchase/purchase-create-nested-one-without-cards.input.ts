import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseCreateWithoutCardsInput } from './purchase-create-without-cards.input';
import { PurchaseCreateOrConnectWithoutCardsInput } from './purchase-create-or-connect-without-cards.input';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';

@InputType()
export class PurchaseCreateNestedOneWithoutCardsInput {

    @Field(() => PurchaseCreateWithoutCardsInput, {nullable:true})
    create?: PurchaseCreateWithoutCardsInput;

    @Field(() => PurchaseCreateOrConnectWithoutCardsInput, {nullable:true})
    connectOrCreate?: PurchaseCreateOrConnectWithoutCardsInput;

    @Field(() => PurchaseWhereUniqueInput, {nullable:true})
    connect?: PurchaseWhereUniqueInput;
}
