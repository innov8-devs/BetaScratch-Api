import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RAFFLE_TYPE } from '../prisma/raffle-type.enum';
import { StakedRaffleCreatenumbersInput } from '../prisma/staked-raffle-createnumbers.input';

@InputType()
export class StakedRaffleCreateWithoutUserInput {

    @Field(() => RAFFLE_TYPE, {nullable:false})
    type!: keyof typeof RAFFLE_TYPE;

    @Field(() => StakedRaffleCreatenumbersInput, {nullable:true})
    numbers?: StakedRaffleCreatenumbersInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
