import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseWhereInput } from './purchase-where.input';

@InputType()
export class PurchaseListRelationFilter {

    @Field(() => PurchaseWhereInput, {nullable:true})
    every?: PurchaseWhereInput;

    @Field(() => PurchaseWhereInput, {nullable:true})
    some?: PurchaseWhereInput;

    @Field(() => PurchaseWhereInput, {nullable:true})
    none?: PurchaseWhereInput;
}
