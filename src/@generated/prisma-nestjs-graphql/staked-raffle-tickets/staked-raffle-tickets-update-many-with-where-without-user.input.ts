import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleTicketsScalarWhereInput } from './staked-raffle-tickets-scalar-where.input';
import { StakedRaffleTicketsUpdateManyMutationInput } from './staked-raffle-tickets-update-many-mutation.input';

@InputType()
export class StakedRaffleTicketsUpdateManyWithWhereWithoutUserInput {

    @Field(() => StakedRaffleTicketsScalarWhereInput, {nullable:false})
    where!: StakedRaffleTicketsScalarWhereInput;

    @Field(() => StakedRaffleTicketsUpdateManyMutationInput, {nullable:false})
    data!: StakedRaffleTicketsUpdateManyMutationInput;
}
