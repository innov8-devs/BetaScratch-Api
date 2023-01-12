import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleUpdateInput } from './staked-raffle-update.input';
import { StakedRaffleWhereUniqueInput } from './staked-raffle-where-unique.input';

@ArgsType()
export class UpdateOneStakedRaffleArgs {

    @Field(() => StakedRaffleUpdateInput, {nullable:false})
    data!: StakedRaffleUpdateInput;

    @Field(() => StakedRaffleWhereUniqueInput, {nullable:false})
    where!: StakedRaffleWhereUniqueInput;
}
