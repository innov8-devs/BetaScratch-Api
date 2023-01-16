import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleTicketsCreateWithoutUserInput } from './staked-raffle-tickets-create-without-user.input';
import { StakedRaffleTicketsCreateOrConnectWithoutUserInput } from './staked-raffle-tickets-create-or-connect-without-user.input';
import { StakedRaffleTicketsCreateManyUserInputEnvelope } from './staked-raffle-tickets-create-many-user-input-envelope.input';
import { StakedRaffleTicketsWhereUniqueInput } from './staked-raffle-tickets-where-unique.input';

@InputType()
export class StakedRaffleTicketsCreateNestedManyWithoutUserInput {

    @Field(() => [StakedRaffleTicketsCreateWithoutUserInput], {nullable:true})
    create?: Array<StakedRaffleTicketsCreateWithoutUserInput>;

    @Field(() => [StakedRaffleTicketsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<StakedRaffleTicketsCreateOrConnectWithoutUserInput>;

    @Field(() => StakedRaffleTicketsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: StakedRaffleTicketsCreateManyUserInputEnvelope;

    @Field(() => [StakedRaffleTicketsWhereUniqueInput], {nullable:true})
    connect?: Array<StakedRaffleTicketsWhereUniqueInput>;
}
