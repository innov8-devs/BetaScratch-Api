import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleTicketsWhereUniqueInput } from './staked-raffle-tickets-where-unique.input';
import { StakedRaffleTicketsCreateWithoutUserInput } from './staked-raffle-tickets-create-without-user.input';

@InputType()
export class StakedRaffleTicketsCreateOrConnectWithoutUserInput {

    @Field(() => StakedRaffleTicketsWhereUniqueInput, {nullable:false})
    where!: StakedRaffleTicketsWhereUniqueInput;

    @Field(() => StakedRaffleTicketsCreateWithoutUserInput, {nullable:false})
    create!: StakedRaffleTicketsCreateWithoutUserInput;
}
