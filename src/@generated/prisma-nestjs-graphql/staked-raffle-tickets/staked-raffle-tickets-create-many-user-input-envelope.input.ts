import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleTicketsCreateManyUserInput } from './staked-raffle-tickets-create-many-user.input';

@InputType()
export class StakedRaffleTicketsCreateManyUserInputEnvelope {

    @Field(() => [StakedRaffleTicketsCreateManyUserInput], {nullable:false})
    data!: Array<StakedRaffleTicketsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
