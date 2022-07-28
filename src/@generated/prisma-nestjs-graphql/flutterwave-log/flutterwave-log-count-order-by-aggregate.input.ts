import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FlutterwaveLogCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tx_ref?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transactionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerEmail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerPhoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    narration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    processorResponse?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    card?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
