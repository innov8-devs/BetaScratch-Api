import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CartScalarWhereInput {

    @Field(() => [CartScalarWhereInput], {nullable:true})
    AND?: Array<CartScalarWhereInput>;

    @Field(() => [CartScalarWhereInput], {nullable:true})
    OR?: Array<CartScalarWhereInput>;

    @Field(() => [CartScalarWhereInput], {nullable:true})
    NOT?: Array<CartScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    price?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    quantity?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    imageUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
