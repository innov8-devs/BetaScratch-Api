import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleTicketsWhereUniqueInput } from './staked-raffle-tickets-where-unique.input';
import { StakedRaffleTicketsCreateInput } from './staked-raffle-tickets-create.input';
import { StakedRaffleTicketsUpdateInput } from './staked-raffle-tickets-update.input';

@ArgsType()
export class UpsertOneStakedRaffleTicketsArgs {

    @Field(() => StakedRaffleTicketsWhereUniqueInput, {nullable:false})
    where!: StakedRaffleTicketsWhereUniqueInput;

    @Field(() => StakedRaffleTicketsCreateInput, {nullable:false})
    create!: StakedRaffleTicketsCreateInput;

    @Field(() => StakedRaffleTicketsUpdateInput, {nullable:false})
    update!: StakedRaffleTicketsUpdateInput;
}
