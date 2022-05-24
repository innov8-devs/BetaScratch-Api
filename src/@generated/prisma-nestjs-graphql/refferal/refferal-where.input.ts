import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
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

    @Field(() => IntNullableListFilter, {nullable:true})
    referrals?: IntNullableListFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
