import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutStakedRaffleTicketsInput } from './user-update-without-staked-raffle-tickets.input';
import { UserCreateWithoutStakedRaffleTicketsInput } from './user-create-without-staked-raffle-tickets.input';

@InputType()
export class UserUpsertWithoutStakedRaffleTicketsInput {

    @Field(() => UserUpdateWithoutStakedRaffleTicketsInput, {nullable:false})
    update!: UserUpdateWithoutStakedRaffleTicketsInput;

    @Field(() => UserCreateWithoutStakedRaffleTicketsInput, {nullable:false})
    create!: UserCreateWithoutStakedRaffleTicketsInput;
}
