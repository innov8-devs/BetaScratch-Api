import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleCreateWithoutUserInput } from './staked-raffle-create-without-user.input';
import { StakedRaffleCreateOrConnectWithoutUserInput } from './staked-raffle-create-or-connect-without-user.input';
import { StakedRaffleUpsertWithWhereUniqueWithoutUserInput } from './staked-raffle-upsert-with-where-unique-without-user.input';
import { StakedRaffleCreateManyUserInputEnvelope } from './staked-raffle-create-many-user-input-envelope.input';
import { StakedRaffleWhereUniqueInput } from './staked-raffle-where-unique.input';
import { StakedRaffleUpdateWithWhereUniqueWithoutUserInput } from './staked-raffle-update-with-where-unique-without-user.input';
import { StakedRaffleUpdateManyWithWhereWithoutUserInput } from './staked-raffle-update-many-with-where-without-user.input';
import { StakedRaffleScalarWhereInput } from './staked-raffle-scalar-where.input';

@InputType()
export class StakedRaffleUpdateManyWithoutUserNestedInput {

    @Field(() => [StakedRaffleCreateWithoutUserInput], {nullable:true})
    create?: Array<StakedRaffleCreateWithoutUserInput>;

    @Field(() => [StakedRaffleCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<StakedRaffleCreateOrConnectWithoutUserInput>;

    @Field(() => [StakedRaffleUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<StakedRaffleUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => StakedRaffleCreateManyUserInputEnvelope, {nullable:true})
    createMany?: StakedRaffleCreateManyUserInputEnvelope;

    @Field(() => [StakedRaffleWhereUniqueInput], {nullable:true})
    set?: Array<StakedRaffleWhereUniqueInput>;

    @Field(() => [StakedRaffleWhereUniqueInput], {nullable:true})
    disconnect?: Array<StakedRaffleWhereUniqueInput>;

    @Field(() => [StakedRaffleWhereUniqueInput], {nullable:true})
    delete?: Array<StakedRaffleWhereUniqueInput>;

    @Field(() => [StakedRaffleWhereUniqueInput], {nullable:true})
    connect?: Array<StakedRaffleWhereUniqueInput>;

    @Field(() => [StakedRaffleUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<StakedRaffleUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [StakedRaffleUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<StakedRaffleUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [StakedRaffleScalarWhereInput], {nullable:true})
    deleteMany?: Array<StakedRaffleScalarWhereInput>;
}
