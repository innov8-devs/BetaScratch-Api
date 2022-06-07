import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseCreateWithoutCardsInput } from './purchase-create-without-cards.input';
import { PurchaseCreateOrConnectWithoutCardsInput } from './purchase-create-or-connect-without-cards.input';
import { PurchaseUpsertWithoutCardsInput } from './purchase-upsert-without-cards.input';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';
import { PurchaseUpdateWithoutCardsInput } from './purchase-update-without-cards.input';

@InputType()
export class PurchaseUpdateOneWithoutCardsInput {

    @Field(() => PurchaseCreateWithoutCardsInput, {nullable:true})
    create?: PurchaseCreateWithoutCardsInput;

    @Field(() => PurchaseCreateOrConnectWithoutCardsInput, {nullable:true})
    connectOrCreate?: PurchaseCreateOrConnectWithoutCardsInput;

    @Field(() => PurchaseUpsertWithoutCardsInput, {nullable:true})
    upsert?: PurchaseUpsertWithoutCardsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PurchaseWhereUniqueInput, {nullable:true})
    connect?: PurchaseWhereUniqueInput;

    @Field(() => PurchaseUpdateWithoutCardsInput, {nullable:true})
    update?: PurchaseUpdateWithoutCardsInput;
}
