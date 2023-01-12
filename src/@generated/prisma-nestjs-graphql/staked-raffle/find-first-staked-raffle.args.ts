import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleWhereInput } from './staked-raffle-where.input';
import { StakedRaffleOrderByWithRelationAndSearchRelevanceInput } from './staked-raffle-order-by-with-relation-and-search-relevance.input';
import { StakedRaffleWhereUniqueInput } from './staked-raffle-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StakedRaffleScalarFieldEnum } from './staked-raffle-scalar-field.enum';

@ArgsType()
export class FindFirstStakedRaffleArgs {

    @Field(() => StakedRaffleWhereInput, {nullable:true})
    where?: StakedRaffleWhereInput;

    @Field(() => [StakedRaffleOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<StakedRaffleOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => StakedRaffleWhereUniqueInput, {nullable:true})
    cursor?: StakedRaffleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StakedRaffleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StakedRaffleScalarFieldEnum>;
}
