import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OtpOrderByRelationAggregateInput } from '../otp/otp-order-by-relation-aggregate.input';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { TokenOrderByRelationAggregateInput } from '../token/token-order-by-relation-aggregate.input';

@InputType()
export class AdminOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobileNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    confirmed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => OtpOrderByRelationAggregateInput, {nullable:true})
    Otp?: OtpOrderByRelationAggregateInput;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    Message?: MessageOrderByRelationAggregateInput;

    @Field(() => TokenOrderByRelationAggregateInput, {nullable:true})
    Token?: TokenOrderByRelationAggregateInput;
}
