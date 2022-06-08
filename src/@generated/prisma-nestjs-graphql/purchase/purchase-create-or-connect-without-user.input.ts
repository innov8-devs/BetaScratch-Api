import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';
import { PurchaseCreateWithoutUserInput } from './purchase-create-without-user.input';

@InputType()
export class PurchaseCreateOrConnectWithoutUserInput {

    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: PurchaseWhereUniqueInput;

    @Field(() => PurchaseCreateWithoutUserInput, {nullable:false})
    create!: PurchaseCreateWithoutUserInput;
}
