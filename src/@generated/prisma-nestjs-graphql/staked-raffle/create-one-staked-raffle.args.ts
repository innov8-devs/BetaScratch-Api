import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleCreateInput } from './staked-raffle-create.input';

@ArgsType()
export class CreateOneStakedRaffleArgs {

    @Field(() => StakedRaffleCreateInput, {nullable:false})
    data!: StakedRaffleCreateInput;
}
