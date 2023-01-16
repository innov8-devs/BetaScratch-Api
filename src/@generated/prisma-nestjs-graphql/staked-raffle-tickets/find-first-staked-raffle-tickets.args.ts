import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleTicketsWhereInput } from './staked-raffle-tickets-where.input';
import { StakedRaffleTicketsOrderByWithRelationAndSearchRelevanceInput } from './staked-raffle-tickets-order-by-with-relation-and-search-relevance.input';
import { StakedRaffleTicketsWhereUniqueInput } from './staked-raffle-tickets-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StakedRaffleTicketsScalarFieldEnum } from './staked-raffle-tickets-scalar-field.enum';

@ArgsType()
export class FindFirstStakedRaffleTicketsArgs {

    @Field(() => StakedRaffleTicketsWhereInput, {nullable:true})
    where?: StakedRaffleTicketsWhereInput;

    @Field(() => [StakedRaffleTicketsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<StakedRaffleTicketsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => StakedRaffleTicketsWhereUniqueInput, {nullable:true})
    cursor?: StakedRaffleTicketsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StakedRaffleTicketsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StakedRaffleTicketsScalarFieldEnum>;
}
