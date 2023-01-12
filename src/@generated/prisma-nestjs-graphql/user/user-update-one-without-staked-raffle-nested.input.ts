import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStakedRaffleInput } from './user-create-without-staked-raffle.input';
import { UserCreateOrConnectWithoutStakedRaffleInput } from './user-create-or-connect-without-staked-raffle.input';
import { UserUpsertWithoutStakedRaffleInput } from './user-upsert-without-staked-raffle.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutStakedRaffleInput } from './user-update-without-staked-raffle.input';

@InputType()
export class UserUpdateOneWithoutStakedRaffleNestedInput {

    @Field(() => UserCreateWithoutStakedRaffleInput, {nullable:true})
    create?: UserCreateWithoutStakedRaffleInput;

    @Field(() => UserCreateOrConnectWithoutStakedRaffleInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutStakedRaffleInput;

    @Field(() => UserUpsertWithoutStakedRaffleInput, {nullable:true})
    upsert?: UserUpsertWithoutStakedRaffleInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutStakedRaffleInput, {nullable:true})
    update?: UserUpdateWithoutStakedRaffleInput;
}
