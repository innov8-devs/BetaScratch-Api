import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleTicketsCreateInput } from './staked-raffle-tickets-create.input';

@ArgsType()
export class CreateOneStakedRaffleTicketsArgs {

    @Field(() => StakedRaffleTicketsCreateInput, {nullable:false})
    data!: StakedRaffleTicketsCreateInput;
}
