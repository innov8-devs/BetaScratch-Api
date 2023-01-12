import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleUpdateManyMutationInput } from './staked-raffle-update-many-mutation.input';
import { StakedRaffleWhereInput } from './staked-raffle-where.input';

@ArgsType()
export class UpdateManyStakedRaffleArgs {

    @Field(() => StakedRaffleUpdateManyMutationInput, {nullable:false})
    data!: StakedRaffleUpdateManyMutationInput;

    @Field(() => StakedRaffleWhereInput, {nullable:true})
    where?: StakedRaffleWhereInput;
}
