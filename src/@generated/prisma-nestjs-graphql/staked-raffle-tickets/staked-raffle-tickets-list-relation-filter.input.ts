import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleTicketsWhereInput } from './staked-raffle-tickets-where.input';

@InputType()
export class StakedRaffleTicketsListRelationFilter {

    @Field(() => StakedRaffleTicketsWhereInput, {nullable:true})
    every?: StakedRaffleTicketsWhereInput;

    @Field(() => StakedRaffleTicketsWhereInput, {nullable:true})
    some?: StakedRaffleTicketsWhereInput;

    @Field(() => StakedRaffleTicketsWhereInput, {nullable:true})
    none?: StakedRaffleTicketsWhereInput;
}
