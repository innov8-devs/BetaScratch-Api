import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumTRANSACTION_TYPENullableFilter } from '../prisma/enum-transaction-type-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PurchaseScalarWhereInput {

    @Field(() => [PurchaseScalarWhereInput], {nullable:true})
    AND?: Array<PurchaseScalarWhereInput>;

    @Field(() => [PurchaseScalarWhereInput], {nullable:true})
    OR?: Array<PurchaseScalarWhereInput>;

    @Field(() => [PurchaseScalarWhereInput], {nullable:true})
    NOT?: Array<PurchaseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    quantity?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    reference?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    subtotal?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => EnumTRANSACTION_TYPENullableFilter, {nullable:true})
    transactionType?: EnumTRANSACTION_TYPENullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    flutterwaveType?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
