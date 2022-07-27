import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FlutterwaveLogAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    transactionId?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
