import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleTicketsWhereInput } from './staked-raffle-tickets-where.input';

@ArgsType()
export class DeleteManyStakedRaffleTicketsArgs {

    @Field(() => StakedRaffleTicketsWhereInput, {nullable:true})
    where?: StakedRaffleTicketsWhereInput;
}
