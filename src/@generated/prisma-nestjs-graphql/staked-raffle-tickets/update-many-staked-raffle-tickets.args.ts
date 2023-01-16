import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleTicketsUpdateManyMutationInput } from './staked-raffle-tickets-update-many-mutation.input';
import { StakedRaffleTicketsWhereInput } from './staked-raffle-tickets-where.input';

@ArgsType()
export class UpdateManyStakedRaffleTicketsArgs {

    @Field(() => StakedRaffleTicketsUpdateManyMutationInput, {nullable:false})
    data!: StakedRaffleTicketsUpdateManyMutationInput;

    @Field(() => StakedRaffleTicketsWhereInput, {nullable:true})
    where?: StakedRaffleTicketsWhereInput;
}
