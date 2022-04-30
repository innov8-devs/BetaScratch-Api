import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class TransactionScalarWhereInput {

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    AND?: Array<TransactionScalarWhereInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    OR?: Array<TransactionScalarWhereInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    NOT?: Array<TransactionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    amount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    transactionId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    transactionRef?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    purpose?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
