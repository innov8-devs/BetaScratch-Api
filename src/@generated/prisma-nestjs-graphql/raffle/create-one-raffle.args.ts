import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RaffleCreateInput } from './raffle-create.input';

@ArgsType()
export class CreateOneRaffleArgs {

    @Field(() => RaffleCreateInput, {nullable:false})
    data!: RaffleCreateInput;
}
