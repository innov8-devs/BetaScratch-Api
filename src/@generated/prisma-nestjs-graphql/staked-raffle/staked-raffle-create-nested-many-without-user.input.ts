import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleCreateWithoutUserInput } from './staked-raffle-create-without-user.input';
import { StakedRaffleCreateOrConnectWithoutUserInput } from './staked-raffle-create-or-connect-without-user.input';
import { StakedRaffleCreateManyUserInputEnvelope } from './staked-raffle-create-many-user-input-envelope.input';
import { StakedRaffleWhereUniqueInput } from './staked-raffle-where-unique.input';

@InputType()
export class StakedRaffleCreateNestedManyWithoutUserInput {

    @Field(() => [StakedRaffleCreateWithoutUserInput], {nullable:true})
    create?: Array<StakedRaffleCreateWithoutUserInput>;

    @Field(() => [StakedRaffleCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<StakedRaffleCreateOrConnectWithoutUserInput>;

    @Field(() => StakedRaffleCreateManyUserInputEnvelope, {nullable:true})
    createMany?: StakedRaffleCreateManyUserInputEnvelope;

    @Field(() => [StakedRaffleWhereUniqueInput], {nullable:true})
    connect?: Array<StakedRaffleWhereUniqueInput>;
}
