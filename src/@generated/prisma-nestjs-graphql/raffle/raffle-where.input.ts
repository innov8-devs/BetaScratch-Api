import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumRAFFLE_TYPEFilter } from '../prisma/enum-raffle-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RaffleWhereInput {

    @Field(() => [RaffleWhereInput], {nullable:true})
    AND?: Array<RaffleWhereInput>;

    @Field(() => [RaffleWhereInput], {nullable:true})
    OR?: Array<RaffleWhereInput>;

    @Field(() => [RaffleWhereInput], {nullable:true})
    NOT?: Array<RaffleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => EnumRAFFLE_TYPEFilter, {nullable:true})
    type?: EnumRAFFLE_TYPEFilter;

    @Field(() => IntFilter, {nullable:true})
    win?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stake?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiriy?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
