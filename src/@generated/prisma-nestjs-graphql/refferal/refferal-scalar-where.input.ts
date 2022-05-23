import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RefferalScalarWhereInput {

    @Field(() => [RefferalScalarWhereInput], {nullable:true})
    AND?: Array<RefferalScalarWhereInput>;

    @Field(() => [RefferalScalarWhereInput], {nullable:true})
    OR?: Array<RefferalScalarWhereInput>;

    @Field(() => [RefferalScalarWhereInput], {nullable:true})
    NOT?: Array<RefferalScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    referrals?: StringNullableListFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
