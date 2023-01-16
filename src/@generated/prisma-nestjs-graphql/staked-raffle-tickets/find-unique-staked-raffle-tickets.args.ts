import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleTicketsWhereUniqueInput } from './staked-raffle-tickets-where-unique.input';

@ArgsType()
export class FindUniqueStakedRaffleTicketsArgs {

    @Field(() => StakedRaffleTicketsWhereUniqueInput, {nullable:false})
    where!: StakedRaffleTicketsWhereUniqueInput;
}
