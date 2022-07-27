import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FlutterwaveLogWhereInput {

    @Field(() => [FlutterwaveLogWhereInput], {nullable:true})
    AND?: Array<FlutterwaveLogWhereInput>;

    @Field(() => [FlutterwaveLogWhereInput], {nullable:true})
    OR?: Array<FlutterwaveLogWhereInput>;

    @Field(() => [FlutterwaveLogWhereInput], {nullable:true})
    NOT?: Array<FlutterwaveLogWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    tx_ref?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    transactionId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    amount?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ip?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    paymentType?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    customerName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    customerEmail?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    narration?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    processorResponse?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    card?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
