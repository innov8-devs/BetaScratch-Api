import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutStakedRaffleInput } from './user-create-without-staked-raffle.input';

@InputType()
export class UserCreateOrConnectWithoutStakedRaffleInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutStakedRaffleInput, {nullable:false})
    create!: UserCreateWithoutStakedRaffleInput;
}
