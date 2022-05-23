import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CartWhereInput {

    @Field(() => [CartWhereInput], {nullable:true})
    AND?: Array<CartWhereInput>;

    @Field(() => [CartWhereInput], {nullable:true})
    OR?: Array<CartWhereInput>;

    @Field(() => [CartWhereInput], {nullable:true})
    NOT?: Array<CartWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

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

    @Field(() => BoolFilter, {nullable:true})
    played?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    reference?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
