import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PurchaseWhereInput } from './purchase-where.input';
import { PurchaseOrderByWithRelationInput } from './purchase-order-by-with-relation.input';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PurchaseScalarFieldEnum } from './purchase-scalar-field.enum';

@ArgsType()
export class FindFirstPurchaseArgs {

    @Field(() => PurchaseWhereInput, {nullable:true})
    where?: PurchaseWhereInput;

    @Field(() => [PurchaseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PurchaseOrderByWithRelationInput>;

    @Field(() => PurchaseWhereUniqueInput, {nullable:true})
    cursor?: PurchaseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PurchaseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PurchaseScalarFieldEnum>;
}
