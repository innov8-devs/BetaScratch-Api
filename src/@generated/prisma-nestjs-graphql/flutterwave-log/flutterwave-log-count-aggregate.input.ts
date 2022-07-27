import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FlutterwaveLogCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    tx_ref?: true;

    @Field(() => Boolean, {nullable:true})
    transactionId?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;

    @Field(() => Boolean, {nullable:true})
    ip?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    paymentType?: true;

    @Field(() => Boolean, {nullable:true})
    customerName?: true;

    @Field(() => Boolean, {nullable:true})
    customerEmail?: true;

    @Field(() => Boolean, {nullable:true})
    narration?: true;

    @Field(() => Boolean, {nullable:true})
    processorResponse?: true;

    @Field(() => Boolean, {nullable:true})
    card?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
