import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleWhereUniqueInput } from './staked-raffle-where-unique.input';

@ArgsType()
export class DeleteOneStakedRaffleArgs {

    @Field(() => StakedRaffleWhereUniqueInput, {nullable:false})
    where!: StakedRaffleWhereUniqueInput;
}
