import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RaffleWhereInput } from './raffle-where.input';
import { RaffleOrderByWithRelationAndSearchRelevanceInput } from './raffle-order-by-with-relation-and-search-relevance.input';
import { RaffleWhereUniqueInput } from './raffle-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RaffleScalarFieldEnum } from './raffle-scalar-field.enum';

@ArgsType()
export class FindManyRaffleArgs {

    @Field(() => RaffleWhereInput, {nullable:true})
    where?: RaffleWhereInput;

    @Field(() => [RaffleOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<RaffleOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => RaffleWhereUniqueInput, {nullable:true})
    cursor?: RaffleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RaffleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RaffleScalarFieldEnum>;
}
