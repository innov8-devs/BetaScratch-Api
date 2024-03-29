import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PurchaseCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    quantity?: true;

    @Field(() => Boolean, {nullable:true})
    reference?: true;

    @Field(() => Boolean, {nullable:true})
    subtotal?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    transactionType?: true;

    @Field(() => Boolean, {nullable:true})
    flutterwaveType?: true;

    @Field(() => Boolean, {nullable:true})
    couponUsed?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
