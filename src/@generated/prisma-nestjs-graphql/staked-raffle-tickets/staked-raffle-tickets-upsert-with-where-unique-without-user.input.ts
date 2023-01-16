import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleTicketsWhereUniqueInput } from './staked-raffle-tickets-where-unique.input';
import { StakedRaffleTicketsUpdateWithoutUserInput } from './staked-raffle-tickets-update-without-user.input';
import { StakedRaffleTicketsCreateWithoutUserInput } from './staked-raffle-tickets-create-without-user.input';

@InputType()
export class StakedRaffleTicketsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => StakedRaffleTicketsWhereUniqueInput, {nullable:false})
    where!: StakedRaffleTicketsWhereUniqueInput;

    @Field(() => StakedRaffleTicketsUpdateWithoutUserInput, {nullable:false})
    update!: StakedRaffleTicketsUpdateWithoutUserInput;

    @Field(() => StakedRaffleTicketsCreateWithoutUserInput, {nullable:false})
    create!: StakedRaffleTicketsCreateWithoutUserInput;
}
