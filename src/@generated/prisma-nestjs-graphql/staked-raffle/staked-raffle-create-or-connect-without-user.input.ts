import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleWhereUniqueInput } from './staked-raffle-where-unique.input';
import { StakedRaffleCreateWithoutUserInput } from './staked-raffle-create-without-user.input';

@InputType()
export class StakedRaffleCreateOrConnectWithoutUserInput {

    @Field(() => StakedRaffleWhereUniqueInput, {nullable:false})
    where!: StakedRaffleWhereUniqueInput;

    @Field(() => StakedRaffleCreateWithoutUserInput, {nullable:false})
    create!: StakedRaffleCreateWithoutUserInput;
}
