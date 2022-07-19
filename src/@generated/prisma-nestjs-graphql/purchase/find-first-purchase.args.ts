import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PurchaseWhereInput } from './purchase-where.input';
import { PurchaseOrderByWithRelationAndSearchRelevanceInput } from './purchase-order-by-with-relation-and-search-relevance.input';
import { PurchaseWhereUniqueInput } from './purchase-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PurchaseScalarFieldEnum } from './purchase-scalar-field.enum';

@ArgsType()
export class FindFirstPurchaseArgs {

    @Field(() => PurchaseWhereInput, {nullable:true})
    where?: PurchaseWhereInput;

    @Field(() => [PurchaseOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<PurchaseOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PurchaseWhereUniqueInput, {nullable:true})
    cursor?: PurchaseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PurchaseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PurchaseScalarFieldEnum>;
}
