import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumRAFFLE_TYPEFilter } from '../prisma/enum-raffle-type-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class StakedRaffleWhereInput {

    @Field(() => [StakedRaffleWhereInput], {nullable:true})
    AND?: Array<StakedRaffleWhereInput>;

    @Field(() => [StakedRaffleWhereInput], {nullable:true})
    OR?: Array<StakedRaffleWhereInput>;

    @Field(() => [StakedRaffleWhereInput], {nullable:true})
    NOT?: Array<StakedRaffleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => EnumRAFFLE_TYPEFilter, {nullable:true})
    type?: EnumRAFFLE_TYPEFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    numbers?: IntNullableListFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
