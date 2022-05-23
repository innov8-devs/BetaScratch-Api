import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MessageWhereInput {

    @Field(() => [MessageWhereInput], {nullable:true})
    AND?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    OR?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    NOT?: Array<MessageWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    link?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    readStatus?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    messageType?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    cards?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
