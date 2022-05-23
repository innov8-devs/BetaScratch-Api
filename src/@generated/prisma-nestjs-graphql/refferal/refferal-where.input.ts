import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RefferalWhereInput {

    @Field(() => [RefferalWhereInput], {nullable:true})
    AND?: Array<RefferalWhereInput>;

    @Field(() => [RefferalWhereInput], {nullable:true})
    OR?: Array<RefferalWhereInput>;

    @Field(() => [RefferalWhereInput], {nullable:true})
    NOT?: Array<RefferalWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    referrals?: StringNullableListFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
