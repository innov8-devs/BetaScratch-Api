import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';
import { StakedRaffleCreatenumbersInput } from '../prisma/staked-raffle-createnumbers.input';
import { UserCreateNestedOneWithoutStakedRaffleInput } from '../user/user-create-nested-one-without-staked-raffle.input';

@InputType()
export class StakedRaffleCreateInput {

    @Field(() => RAFFLE_TYPE, {nullable:false})
    type!: keyof typeof RAFFLE_TYPE;

    @Field(() => StakedRaffleCreatenumbersInput, {nullable:true})
    numbers?: StakedRaffleCreatenumbersInput;

    @Field(() => UserCreateNestedOneWithoutStakedRaffleInput, {nullable:true})
    user?: UserCreateNestedOneWithoutStakedRaffleInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
