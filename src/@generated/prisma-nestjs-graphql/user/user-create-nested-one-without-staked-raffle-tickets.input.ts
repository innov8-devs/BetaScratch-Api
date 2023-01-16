import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStakedRaffleTicketsInput } from './user-create-without-staked-raffle-tickets.input';
import { UserCreateOrConnectWithoutStakedRaffleTicketsInput } from './user-create-or-connect-without-staked-raffle-tickets.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutStakedRaffleTicketsInput {

    @Field(() => UserCreateWithoutStakedRaffleTicketsInput, {nullable:true})
    create?: UserCreateWithoutStakedRaffleTicketsInput;

    @Field(() => UserCreateOrConnectWithoutStakedRaffleTicketsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutStakedRaffleTicketsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
