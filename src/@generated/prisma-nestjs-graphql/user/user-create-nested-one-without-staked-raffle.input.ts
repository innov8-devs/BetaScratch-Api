import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStakedRaffleInput } from './user-create-without-staked-raffle.input';
import { UserCreateOrConnectWithoutStakedRaffleInput } from './user-create-or-connect-without-staked-raffle.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutStakedRaffleInput {

    @Field(() => UserCreateWithoutStakedRaffleInput, {nullable:true})
    create?: UserCreateWithoutStakedRaffleInput;

    @Field(() => UserCreateOrConnectWithoutStakedRaffleInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutStakedRaffleInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
