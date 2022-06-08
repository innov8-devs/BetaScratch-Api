import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';
import { PurchaseUpdateWithoutUserInput } from './purchase-update-without-user.input';
import { PurchaseCreateWithoutUserInput } from './purchase-create-without-user.input';

@InputType()
export class PurchaseUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: PurchaseWhereUniqueInput;

    @Field(() => PurchaseUpdateWithoutUserInput, {nullable:false})
    update!: PurchaseUpdateWithoutUserInput;

    @Field(() => PurchaseCreateWithoutUserInput, {nullable:false})
    create!: PurchaseCreateWithoutUserInput;
}
