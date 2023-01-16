import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStakedRaffleTicketsInput } from './user-create-without-staked-raffle-tickets.input';
import { UserCreateOrConnectWithoutStakedRaffleTicketsInput } from './user-create-or-connect-without-staked-raffle-tickets.input';
import { UserUpsertWithoutStakedRaffleTicketsInput } from './user-upsert-without-staked-raffle-tickets.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutStakedRaffleTicketsInput } from './user-update-without-staked-raffle-tickets.input';

@InputType()
export class UserUpdateOneWithoutStakedRaffleTicketsNestedInput {

    @Field(() => UserCreateWithoutStakedRaffleTicketsInput, {nullable:true})
    create?: UserCreateWithoutStakedRaffleTicketsInput;

    @Field(() => UserCreateOrConnectWithoutStakedRaffleTicketsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutStakedRaffleTicketsInput;

    @Field(() => UserUpsertWithoutStakedRaffleTicketsInput, {nullable:true})
    upsert?: UserUpsertWithoutStakedRaffleTicketsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutStakedRaffleTicketsInput, {nullable:true})
    update?: UserUpdateWithoutStakedRaffleTicketsInput;
}
