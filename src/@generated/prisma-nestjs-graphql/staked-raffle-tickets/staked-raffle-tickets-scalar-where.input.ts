import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumRAFFLE_TYPEFilter } from '../prisma/enum-raffle-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumTRANSACTION_TYPEFilter } from '../prisma/enum-transaction-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class StakedRaffleTicketsScalarWhereInput {

    @Field(() => [StakedRaffleTicketsScalarWhereInput], {nullable:true})
    AND?: Array<StakedRaffleTicketsScalarWhereInput>;

    @Field(() => [StakedRaffleTicketsScalarWhereInput], {nullable:true})
    OR?: Array<StakedRaffleTicketsScalarWhereInput>;

    @Field(() => [StakedRaffleTicketsScalarWhereInput], {nullable:true})
    NOT?: Array<StakedRaffleTicketsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => EnumRAFFLE_TYPEFilter, {nullable:true})
    type?: EnumRAFFLE_TYPEFilter;

    @Field(() => StringFilter, {nullable:true})
    originalNumbers?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sortedNumbers?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    reference?: StringNullableFilter;

    @Field(() => EnumTRANSACTION_TYPEFilter, {nullable:true})
    transactionType?: EnumTRANSACTION_TYPEFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPaid?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
