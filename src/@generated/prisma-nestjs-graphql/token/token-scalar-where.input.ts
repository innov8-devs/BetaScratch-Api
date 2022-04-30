import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class TokenScalarWhereInput {

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    AND?: Array<TokenScalarWhereInput>;

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    OR?: Array<TokenScalarWhereInput>;

    @Field(() => [TokenScalarWhereInput], {nullable:true})
    NOT?: Array<TokenScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    subject?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expire?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    validity?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    mobileNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
