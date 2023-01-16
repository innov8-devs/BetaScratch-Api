import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleTicketsCreateWithoutUserInput } from './staked-raffle-tickets-create-without-user.input';
import { StakedRaffleTicketsCreateOrConnectWithoutUserInput } from './staked-raffle-tickets-create-or-connect-without-user.input';
import { StakedRaffleTicketsUpsertWithWhereUniqueWithoutUserInput } from './staked-raffle-tickets-upsert-with-where-unique-without-user.input';
import { StakedRaffleTicketsCreateManyUserInputEnvelope } from './staked-raffle-tickets-create-many-user-input-envelope.input';
import { StakedRaffleTicketsWhereUniqueInput } from './staked-raffle-tickets-where-unique.input';
import { StakedRaffleTicketsUpdateWithWhereUniqueWithoutUserInput } from './staked-raffle-tickets-update-with-where-unique-without-user.input';
import { StakedRaffleTicketsUpdateManyWithWhereWithoutUserInput } from './staked-raffle-tickets-update-many-with-where-without-user.input';
import { StakedRaffleTicketsScalarWhereInput } from './staked-raffle-tickets-scalar-where.input';

@InputType()
export class StakedRaffleTicketsUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [StakedRaffleTicketsCreateWithoutUserInput], {nullable:true})
    create?: Array<StakedRaffleTicketsCreateWithoutUserInput>;

    @Field(() => [StakedRaffleTicketsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<StakedRaffleTicketsCreateOrConnectWithoutUserInput>;

    @Field(() => [StakedRaffleTicketsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<StakedRaffleTicketsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => StakedRaffleTicketsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: StakedRaffleTicketsCreateManyUserInputEnvelope;

    @Field(() => [StakedRaffleTicketsWhereUniqueInput], {nullable:true})
    set?: Array<StakedRaffleTicketsWhereUniqueInput>;

    @Field(() => [StakedRaffleTicketsWhereUniqueInput], {nullable:true})
    disconnect?: Array<StakedRaffleTicketsWhereUniqueInput>;

    @Field(() => [StakedRaffleTicketsWhereUniqueInput], {nullable:true})
    delete?: Array<StakedRaffleTicketsWhereUniqueInput>;

    @Field(() => [StakedRaffleTicketsWhereUniqueInput], {nullable:true})
    connect?: Array<StakedRaffleTicketsWhereUniqueInput>;

    @Field(() => [StakedRaffleTicketsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<StakedRaffleTicketsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [StakedRaffleTicketsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<StakedRaffleTicketsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [StakedRaffleTicketsScalarWhereInput], {nullable:true})
    deleteMany?: Array<StakedRaffleTicketsScalarWhereInput>;
}
