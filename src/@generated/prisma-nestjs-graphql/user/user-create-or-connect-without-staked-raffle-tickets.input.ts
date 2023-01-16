import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutStakedRaffleTicketsInput } from './user-create-without-staked-raffle-tickets.input';

@InputType()
export class UserCreateOrConnectWithoutStakedRaffleTicketsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutStakedRaffleTicketsInput, {nullable:false})
    create!: UserCreateWithoutStakedRaffleTicketsInput;
}
