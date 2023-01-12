import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutStakedRaffleInput } from './user-update-without-staked-raffle.input';
import { UserCreateWithoutStakedRaffleInput } from './user-create-without-staked-raffle.input';

@InputType()
export class UserUpsertWithoutStakedRaffleInput {

    @Field(() => UserUpdateWithoutStakedRaffleInput, {nullable:false})
    update!: UserUpdateWithoutStakedRaffleInput;

    @Field(() => UserCreateWithoutStakedRaffleInput, {nullable:false})
    create!: UserCreateWithoutStakedRaffleInput;
}
