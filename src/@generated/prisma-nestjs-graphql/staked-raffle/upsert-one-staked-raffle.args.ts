import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleWhereUniqueInput } from './staked-raffle-where-unique.input';
import { StakedRaffleCreateInput } from './staked-raffle-create.input';
import { StakedRaffleUpdateInput } from './staked-raffle-update.input';

@ArgsType()
export class UpsertOneStakedRaffleArgs {

    @Field(() => StakedRaffleWhereUniqueInput, {nullable:false})
    where!: StakedRaffleWhereUniqueInput;

    @Field(() => StakedRaffleCreateInput, {nullable:false})
    create!: StakedRaffleCreateInput;

    @Field(() => StakedRaffleUpdateInput, {nullable:false})
    update!: StakedRaffleUpdateInput;
}
