import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleScalarWhereInput } from './staked-raffle-scalar-where.input';
import { StakedRaffleUpdateManyMutationInput } from './staked-raffle-update-many-mutation.input';

@InputType()
export class StakedRaffleUpdateManyWithWhereWithoutUserInput {

    @Field(() => StakedRaffleScalarWhereInput, {nullable:false})
    where!: StakedRaffleScalarWhereInput;

    @Field(() => StakedRaffleUpdateManyMutationInput, {nullable:false})
    data!: StakedRaffleUpdateManyMutationInput;
}
