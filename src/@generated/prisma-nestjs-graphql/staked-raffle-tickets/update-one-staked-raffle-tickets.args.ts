import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleTicketsUpdateInput } from './staked-raffle-tickets-update.input';
import { StakedRaffleTicketsWhereUniqueInput } from './staked-raffle-tickets-where-unique.input';

@ArgsType()
export class UpdateOneStakedRaffleTicketsArgs {

    @Field(() => StakedRaffleTicketsUpdateInput, {nullable:false})
    data!: StakedRaffleTicketsUpdateInput;

    @Field(() => StakedRaffleTicketsWhereUniqueInput, {nullable:false})
    where!: StakedRaffleTicketsWhereUniqueInput;
}
