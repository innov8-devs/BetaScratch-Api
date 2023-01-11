import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RaffleUpdateInput } from './raffle-update.input';
import { RaffleWhereUniqueInput } from './raffle-where-unique.input';

@ArgsType()
export class UpdateOneRaffleArgs {

    @Field(() => RaffleUpdateInput, {nullable:false})
    data!: RaffleUpdateInput;

    @Field(() => RaffleWhereUniqueInput, {nullable:false})
    where!: RaffleWhereUniqueInput;
}
