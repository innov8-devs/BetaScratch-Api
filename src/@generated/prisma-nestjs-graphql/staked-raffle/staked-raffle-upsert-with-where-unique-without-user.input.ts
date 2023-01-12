import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleWhereUniqueInput } from './staked-raffle-where-unique.input';
import { StakedRaffleUpdateWithoutUserInput } from './staked-raffle-update-without-user.input';
import { StakedRaffleCreateWithoutUserInput } from './staked-raffle-create-without-user.input';

@InputType()
export class StakedRaffleUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => StakedRaffleWhereUniqueInput, {nullable:false})
    where!: StakedRaffleWhereUniqueInput;

    @Field(() => StakedRaffleUpdateWithoutUserInput, {nullable:false})
    update!: StakedRaffleUpdateWithoutUserInput;

    @Field(() => StakedRaffleCreateWithoutUserInput, {nullable:false})
    create!: StakedRaffleCreateWithoutUserInput;
}
