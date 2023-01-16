import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleTicketsOrderByRelevanceFieldEnum } from './staked-raffle-tickets-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class StakedRaffleTicketsOrderByRelevanceInput {

    @Field(() => [StakedRaffleTicketsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof StakedRaffleTicketsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
