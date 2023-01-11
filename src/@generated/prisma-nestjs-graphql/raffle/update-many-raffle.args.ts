import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RaffleUpdateManyMutationInput } from './raffle-update-many-mutation.input';
import { RaffleWhereInput } from './raffle-where.input';

@ArgsType()
export class UpdateManyRaffleArgs {

    @Field(() => RaffleUpdateManyMutationInput, {nullable:false})
    data!: RaffleUpdateManyMutationInput;

    @Field(() => RaffleWhereInput, {nullable:true})
    where?: RaffleWhereInput;
}
