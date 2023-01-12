import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleWhereUniqueInput } from './staked-raffle-where-unique.input';
import { StakedRaffleUpdateWithoutUserInput } from './staked-raffle-update-without-user.input';

@InputType()
export class StakedRaffleUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => StakedRaffleWhereUniqueInput, {nullable:false})
    where!: StakedRaffleWhereUniqueInput;

    @Field(() => StakedRaffleUpdateWithoutUserInput, {nullable:false})
    data!: StakedRaffleUpdateWithoutUserInput;
}
