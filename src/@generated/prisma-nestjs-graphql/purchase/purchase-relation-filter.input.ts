import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseWhereInput } from './purchase-where.input';

@InputType()
export class PurchaseRelationFilter {

    @Field(() => PurchaseWhereInput, {nullable:true})
    is?: PurchaseWhereInput;

    @Field(() => PurchaseWhereInput, {nullable:true})
    isNot?: PurchaseWhereInput;
}
